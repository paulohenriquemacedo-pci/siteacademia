import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BlogCard from "@/components/BlogCard";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const BlogIndex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet prioritizeSeoTags>
        <title>Blog | Sistema A.C.A.D.E.M.I.A — Produtividade Acadêmica para Mestrado e Doutorado</title>
        <meta name="description" content="Artigos sobre produtividade acadêmica, superação da procrastinação e método científico para mestrandos, doutorandos e graduandos em TCC." />
        <link rel="canonical" href="https://sistemaacademia.com.br/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sistemaacademia.com.br/blog" />
        <meta property="og:title" content="Blog | Sistema A.C.A.D.E.M.I.A" />
        <meta property="og:description" content="Artigos sobre produtividade acadêmica, superação da procrastinação e método científico para mestrandos, doutorandos e graduandos em TCC." />
      </Helmet>
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

          {isLoading ? (
            <div className="text-center py-20">Carregando posts...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts?.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
              {posts?.length === 0 && (
                <div className="col-span-full text-center py-10 text-slate-500">
                  Nenhum post publicado ainda.
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
