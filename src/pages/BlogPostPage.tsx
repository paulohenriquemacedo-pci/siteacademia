import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "@/lib/blog-data";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Calendar, Clock, User, ChevronLeft, Share2 } from "lucide-react";
import { useEffect } from "react";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <article className="container px-4 mx-auto max-w-4xl">
          {/* Back link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-academy-600 mb-8 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o blog
          </Link>

          {/* Header */}
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
                  S
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">{post.author}</span>
                  <span className="text-xs">Autor</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-slate-900">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  <span className="text-xs">Publicado em</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-slate-900">{post.readTime}</span>
                  <span className="text-xs">Tempo de leitura</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-strong:text-academy-600 prose-a:text-academy-600 hover:prose-a:text-academy-700">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Share & Footer */}
          <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-900">Compartilhe este artigo:</span>
              <button 
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                title="Copiar link"
              >
                <Share2 className="w-5 h-5" />
              </button>
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