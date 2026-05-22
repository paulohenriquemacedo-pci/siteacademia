import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Image as ImageIcon, Loader2 } from "lucide-react";

export default function AdminPostEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEditing);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    image_url: "",
    read_time: "",
    published: false,
    published_at: null as string | null
  });

  useEffect(() => {
    if (isEditing) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      toast.error("Erro ao carregar post");
      navigate("/admin");
    } else {
      setFormData(data);
    }
    setFetching(false);
  };

  const handleSlugify = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === "title" && !isEditing) {
        newData.slug = handleSlugify(value);
      }
      return newData;
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `post-images/${fileName}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("blog-images")
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, image_url: publicUrl }));
      toast.success("Imagem enviada com sucesso!");
    } catch (error: any) {
      toast.error("Erro no upload: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSave = {
        ...formData,
        published_at: formData.published && !formData.published_at ? new Date().toISOString() : formData.published_at
      };

      let error;
      if (isEditing) {
        const { error: updateError } = await supabase
          .from("posts")
          .update(dataToSave)
          .eq("id", id);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from("posts")
          .insert([dataToSave]);
        error = insertError;
      }

      if (error) throw error;

      toast.success(isEditing ? "Post atualizado!" : "Post criado com sucesso!");
      navigate("/admin");
    } catch (error: any) {
      toast.error("Erro ao salvar post: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <AdminLayout>Carregando...</AdminLayout>;

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? "Editar Post" : "Novo Post"}
          </h1>
          <p className="text-gray-500">Preencha os campos abaixo para {isEditing ? "atualizar" : "criar"} sua publicação.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input 
                  id="title" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleChange} 
                  required 
                  placeholder="Título do post"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input 
                  id="slug" 
                  name="slug" 
                  value={formData.slug} 
                  onChange={handleChange} 
                  required 
                  placeholder="ex: titulo-do-post"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Resumo (Excerpt)</Label>
                <Textarea 
                  id="excerpt" 
                  name="excerpt" 
                  value={formData.excerpt} 
                  onChange={handleChange} 
                  placeholder="Um breve resumo para aparecer na listagem"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Conteúdo (HTML aceito)</Label>
                <Textarea 
                  id="content" 
                  name="content" 
                  value={formData.content} 
                  onChange={handleChange} 
                  required 
                  placeholder="Escreva o conteúdo aqui. Você pode usar tags HTML para formatação."
                  className="min-h-[400px]"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="published" className="font-bold">Publicado</Label>
                <Switch 
                  id="published" 
                  checked={formData.published} 
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, published: checked }))} 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Input 
                  id="category" 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange} 
                  placeholder="ex: Escrita"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="read_time">Tempo de Leitura</Label>
                <Input 
                  id="read_time" 
                  name="read_time" 
                  value={formData.read_time} 
                  onChange={handleChange} 
                  placeholder="ex: 5 min"
                />
              </div>

              <div className="space-y-2">
                <Label>Imagem de Capa</Label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md relative group">
                  {formData.image_url ? (
                    <div className="relative w-full">
                      <img src={formData.image_url} alt="Preview" className="max-h-48 w-full object-cover rounded" />
                      <button 
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, image_url: "" }))}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <span className="text-xs px-1">Remover</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-center">
                      {uploading ? (
                        <Loader2 className="mx-auto h-12 w-12 text-gray-400 animate-spin" />
                      ) : (
                        <>
                          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label className="relative cursor-pointer bg-white rounded-md font-medium text-academy-600 hover:text-academy-500">
                              <span>Upload de imagem</span>
                              <input type="file" className="sr-only" onChange={handleImageUpload} accept="image/*" />
                            </label>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
                {formData.image_url && (
                  <Input 
                    value={formData.image_url} 
                    onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                    placeholder="URL da imagem"
                    className="mt-2 text-xs"
                  />
                )}
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isEditing ? "Atualizar Post" : "Criar Post"}
              </Button>
              <Button type="button" variant="outline" className="w-full" onClick={() => navigate("/admin")}>
                Cancelar
              </Button>
            </CardContent>
          </Card>
        </div>
      </form>
    </AdminLayout>
  );
}
