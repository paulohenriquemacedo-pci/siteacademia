import { blogPosts } from "@/lib/blog-data";
import BlogCard from "../BlogCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold text-academy-600 tracking-wide uppercase mb-3">Blog</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Conteúdo para acelerar sua <span className="text-academy-600">Jornada Acadêmica</span>
            </h3>
          </div>
          
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-academy-600 font-bold hover:gap-3 transition-all group"
          >
            Ver todos os artigos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;