export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: "Escrita" | "Organização" | "Carreira" | "Metodologia";
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "como-vencer-o-bloqueio-de-escrita-na-pos-graduacao",
    title: "Como vencer o bloqueio de escrita na pós-graduação",
    excerpt: "Descubra técnicas práticas para destravar sua dissertação ou tese e manter a constância na produção acadêmica.",
    content: `
      <p>O bloqueio de escrita é um dos maiores desafios enfrentados por mestrandos e doutorandos. A pressão por resultados, aliada à autocrítica excessiva, muitas vezes resulta em horas diante de uma tela em branco.</p>
      
      <h2>1. Entenda a causa do bloqueio</h2>
      <p>Muitas vezes, o bloqueio não é falta de criatividade, mas sim excesso de perfeccionismo. Queremos que a primeira versão saia perfeita, o que é impossível.</p>
      
      <h2>2. A técnica do "Vômito Intelectual"</h2>
      <p>Escreva sem parar por 15 minutos, sem se preocupar com gramática ou referências. O objetivo é apenas colocar as ideias no papel. Você terá tempo para editar depois.</p>
      
      <h2>3. Aplique o Método A.C.A.D.E.M.I.A</h2>
      <p>Utilizando o pilar da <strong>Disciplina</strong> e do <strong>Cronograma</strong>, reserve um horário fixo no seu dia exclusivamente para a escrita, independentemente da inspiração.</p>
    `,
    date: "2024-05-20",
    author: "Equipe Sistema A.C.A.D.E.M.I.A",
    category: "Escrita",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60",
    readTime: "5 min"
  },
  {
    id: "2",
    slug: "organizacao-do-cronograma-de-pesquisa",
    title: "Organização do cronograma de pesquisa: por onde começar?",
    excerpt: "Um cronograma bem estruturado é a espinha dorsal de qualquer pesquisa científica de sucesso. Saiba como montar o seu.",
    content: `
      <p>Ter um cronograma não é apenas listar datas, mas entender o fluxo real do seu trabalho científico.</p>
      
      <h2>O Pilar do Cronograma</h2>
      <p>No Sistema A.C.A.D.E.M.I.A, o cronograma é o segundo pilar essencial. Ele deve ser realista e maleável.</p>
    `,
    date: "2024-05-18",
    author: "Equipe Sistema A.C.A.D.E.M.I.A",
    category: "Organização",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60",
    readTime: "4 min"
  }
];
