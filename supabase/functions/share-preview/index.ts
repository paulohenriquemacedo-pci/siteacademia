import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apiKey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const url = new URL(req.url)
  const slug = url.searchParams.get('slug')

  if (!slug) {
    return new Response('Missing slug', { status: 400 })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  const supabase = createClient(supabaseUrl, supabaseKey)

  // Fetch post data from database
  const { data: post, error } = await supabase
    .from('posts')
    .select('title, excerpt, image_url')
    .eq('slug', slug)
    .single()

  if (error || !post) {
    console.error(`Error fetching post with slug [${slug}]:`, error)
    // Fallback instead of 404 to see what's happening
    return new Response(`Post [${slug}] not found.`, { status: 404 })
  }

  const title = `${post.title} | Sistema A.C.A.D.E.M.I.A`
  const description = post.excerpt || "Leia mais sobre este post no blog do Sistema A.C.A.D.E.M.I.A"
  const imageUrl = post.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60"
  const canonicalUrl = `https://sistemaacademia.com.br/blog/${slug}`

  // Return HTML with Open Graph tags and a redirect
  const html = `<!DOCTYPE html>
<html lang="pt-BR" prefix="og: http://ogp.me/ns#">
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    
    <!-- Metatags Essenciais para o Crawler -->
    <meta name="description" content="${description}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:secure_url" content="${imageUrl}">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="${req.url}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Sistema A.C.A.D.E.M.I.A">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${imageUrl}">

    <script>
        // Redirecionamento via JS (Crawlers ignoram isso e leem as tags acima)
        window.location.href = "${canonicalUrl}";
    </script>
</head>
<body>
    Redirecionando para <a href="${canonicalUrl}">${title}</a>...
</body>
</html>`

  return new Response(html, {
    headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' },
    status: 200,
  })
})
