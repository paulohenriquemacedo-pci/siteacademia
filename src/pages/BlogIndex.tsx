import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";
import { useEffect } from "react";

const BlogIndex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Blog Sistema A.C.A.D.E.M.I.A
            </h1>
            <p className="text-xl text-slate-600">
              Insights, técnicas e reflexões sobre produtividade, escrita e vida acadêmica na pós-graduação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;