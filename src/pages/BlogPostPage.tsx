import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Calendar, Clock, ChevronLeft, Share2, Download, Facebook, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const BlogPostPage = () => {
  const { slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select(`
          *,
          author:profiles(full_name)
        `)
        .eq("slug", slug)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (post) {
      const canonicalUrl = `https://sistemaacademia.com.br/blog/${slug}`;
      const title = `${post.title} | Sistema A.C.A.D.E.M.I.A`;
      const description = post.excerpt || "Leia mais sobre este post no blog do Sistema A.C.A.D.E.M.I.A";
      const imageUrl = post.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60";

      // Function to force update meta tags that crawlers look for
      const updateMeta = (property: string, content: string, attr: string = 'property') => {
        // Remove existing ones to avoid duplicates (especially from index.html)
        document.querySelectorAll(`meta[${attr}="${property}"]`).forEach(el => el.remove());
        
        const element = document.createElement('meta');
        element.setAttribute(attr, property);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      };

      updateMeta('og:url', canonicalUrl);
      updateMeta('og:title', title);
      updateMeta('og:description', description);
      updateMeta('og:image', imageUrl);
      updateMeta('og:image:width', '1200');
      updateMeta('og:image:height', '630');
      updateMeta('og:type', 'article');
      updateMeta('og:site_name', 'Sistema A.C.A.D.E.M.I.A');
      updateMeta('description', description, 'name');

      // Twitter tags as well
      updateMeta('twitter:card', 'summary_large_image', 'name');
      updateMeta('twitter:title', title, 'name');
      updateMeta('twitter:description', description, 'name');
      updateMeta('twitter:image', imageUrl, 'name');

      // Force canonical link
      document.querySelectorAll('link[rel="canonical"]').forEach(el => el.remove());
      const linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(linkCanonical);
    }
  }, [slug, post]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">Carregando...</div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const imageUrl = post.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60";
  const authorName = post.author?.full_name || "Equipe Academia";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet prioritizeSeoTags>
        <title>{post.title} | Sistema A.C.A.D.E.M.I.A</title>
        <meta name="description" content={post.excerpt || "Leia mais sobre este post no blog do Sistema A.C.A.D.E.M.I.A"} />
        
        {/* Open Graph / Facebook - Essential for sharing */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://sistemaacademia.com.br/blog/${slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || "Leia mais sobre este post no blog do Sistema A.C.A.D.E.M.I.A"} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Sistema A.C.A.D.E.M.I.A" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://sistemaacademia.com.br/blog/${slug}`} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || "Leia mais sobre este post no blog do Sistema A.C.A.D.E.M.I.A"} />
        <meta name="twitter:image" content={imageUrl} />
        
        <link rel="canonical" href={`https://sistemaacademia.com.br/blog/${slug}`} />
      </Helmet>
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <article className="container px-4 mx-auto max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-academy-600 mb-8 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-academy-100 text-academy-700 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-slate-500 border-y border-slate-100 py-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-academy-100 flex items-center justify-center text-academy-600 font-bold">
                  {authorName.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">{authorName}</span>
                  <span className="text-xs">Autor</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-slate-900">
                    {new Date(post.published_at || post.created_at).toLocaleDateString('pt-BR')}
                  </span>
                  <span className="text-xs">Publicado em</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-slate-900">{post.read_time}</span>
                  <span className="text-xs">Tempo de leitura</span>
                </div>
              </div>
            </div>
          </header>

          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img 
              src={imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-strong:text-academy-600 prose-a:text-academy-600 hover:prose-a:text-academy-700">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-bold text-slate-900">Ações:</span>
              <button 
                onClick={() => {
                  const canonicalUrl = `https://sistemaacademia.com.br/blog/${slug}`;
                  navigator.clipboard.writeText(canonicalUrl);
                  toast.success("Link copiado!");
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors text-sm"
                title="Copiar link"
              >
                <Share2 className="w-4 h-4" />
                Copiar
              </button>

              <a 
                href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(`https://douhwqlpfgwuqwturdjw.supabase.co/functions/v1/share-preview?slug=${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-[#1877F2] hover:text-white text-[#1877F2] transition-colors text-sm border border-slate-100"
                title="Compartilhar no Facebook"
                data-href={`https://sistemaacademia.com.br/blog/${slug}`}
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>

              <a 
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + `https://sistemaacademia.com.br/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-[#25D366] hover:text-white text-[#25D366] transition-colors text-sm border border-slate-100"
                title="Compartilhar no WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              {post.image_url && (
                <a 
                  href={post.image_url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Baixar Imagem
                </a>
              )}
            </div>
            
            <Link 
              to="/blog" 
              className="text-academy-600 font-bold hover:underline"
            >
              Explorar mais conteúdos
            </Link>
          </footer>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
