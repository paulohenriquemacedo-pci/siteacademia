import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export interface BlogCardPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  image_url?: string | null;
  image?: string; // fallback for old data
  published_at?: string | null;
  date?: string; // fallback for old data
  read_time?: string | null;
  readTime?: string; // fallback for old data
}

interface BlogCardProps {
  post: BlogCardPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const imageUrl = post.image_url || post.image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60";
  const dateStr = post.published_at || post.date || new Date().toISOString();
  const readTimeStr = post.read_time || post.readTime || "5 min";

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-video">
        <img
          src={imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
          <span className="bg-academy-100 text-academy-700 px-2.5 py-0.5 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(dateStr).toLocaleDateString('pt-BR')}</span>
          </div>
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-academy-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-slate-600 mb-6 line-clamp-3 text-sm flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Clock className="w-3 h-3" />
            <span>{readTimeStr} de leitura</span>
          </div>
          
          <Link 
            to={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-semibold text-academy-600 hover:text-academy-700 gap-1 transition-colors"
          >
            Ler mais
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
