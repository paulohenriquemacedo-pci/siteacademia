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

  const { data: post, error } = await supabase
    .from('posts')
    .select('title, excerpt, image_url')
    .eq('slug', slug)
    .single()

  if (error || !post) {
    return new Response(`Post not found`, { status: 404 })
  }

  const title = post.title.replace(/"/g, '&quot;') + ' | Sistema A.C.A.D.E.M.I.A'
  const description = (post.excerpt || "Leia mais sobre este post no blog do Sistema A.C.A.D.E.M.I.A").replace(/"/g, '&quot;')
  const rawImageUrl = post.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60"
  
  // Ensure image URL is absolute and use a more standard format if possible
  const imageUrl = rawImageUrl.includes('?') ? rawImageUrl : `${rawImageUrl}?t=${Date.now()}`

  const canonicalUrl = `https://sistemaacademia.com.br/blog/${slug}`
  const shareUrl = `https://douhwqlpfgwuqwturdjw.supabase.co/functions/v1/share-preview?slug=${slug}`

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <meta name="description" content="${description}">
    
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:url" content="${shareUrl}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Sistema A.C.A.D.E.M.I.A">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${imageUrl}">

    <script>
        window.location.href = "${canonicalUrl}";
    </script>
</head>
<body>
    Redirecionando para <a href="${canonicalUrl}">${title}</a>...
</body>
</html>`

  return new Response(html, {
    headers: { 
      ...corsHeaders, 
      'Content-Type': 'text/html; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    },
    status: 200,
  })
})
