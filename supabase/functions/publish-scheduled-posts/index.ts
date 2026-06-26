import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Find posts that should be published now
    const { data: dueposts, error: selErr } = await supabase
      .from("posts")
      .select("id, title, slug, author_id, scheduled_for")
      .eq("published", false)
      .not("scheduled_for", "is", null)
      .lte("scheduled_for", new Date().toISOString());

    if (selErr) throw selErr;

    const published: any[] = [];

    for (const post of dueposts || []) {
      const { error: updErr } = await supabase
        .from("posts")
        .update({
          published: true,
          published_at: new Date().toISOString(),
        })
        .eq("id", post.id)
        .eq("published", false);

      if (updErr) {
        console.error("Failed to publish post", post.id, updErr);
        continue;
      }

      published.push(post);

      // Try to send notification email (gracefully no-op if not configured)
      try {
        let recipientEmail: string | null = null;
        if (post.author_id) {
          const { data: userRes } = await supabase.auth.admin.getUserById(
            post.author_id
          );
          recipientEmail = userRes?.user?.email ?? null;
        }

        if (recipientEmail) {
          const publicUrl = `https://sistemaacademia.com.br/blog/${post.slug}`;
          const { error: mailErr } = await supabase.functions.invoke(
            "send-transactional-email",
            {
              body: {
                templateName: "post-published-notification",
                recipientEmail,
                idempotencyKey: `post-published-${post.id}`,
                templateData: {
                  title: post.title,
                  url: publicUrl,
                  publishedAt: new Date().toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo",
                  }),
                },
              },
            }
          );
          if (mailErr) {
            console.log(
              "Notification email skipped/failed:",
              mailErr.message || mailErr
            );
          }
        }
      } catch (e) {
        console.log("Notification step skipped:", (e as Error).message);
      }
    }

    return new Response(
      JSON.stringify({ published_count: published.length, published }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (e) {
    console.error("publish-scheduled-posts error:", e);
    return new Response(
      JSON.stringify({ error: (e as Error).message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
