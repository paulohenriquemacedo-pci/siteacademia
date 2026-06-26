import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Termos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24 px-4">
        <article className="container mx-auto max-w-3xl">
          <p className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
            Documento legal
          </p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">
            Termos de Uso
          </h1>
          <p className="font-serif text-sm text-muted-foreground mb-10">
            Última atualização: 16 de maio de 2026
          </p>

          <div className="space-y-8 font-serif text-base text-foreground leading-relaxed">
            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                1. Aceitação dos termos
              </h2>
              <p>
                Estes Termos de Uso regulam o acesso e a utilização do site institucional do{" "}
                <strong>Sistema A.C.A.D.E.M.I.A</strong>, mantido por <strong>Método PCI LTDA</strong>{" "}
                ("nós", "Método PCI"). Ao navegar pelo site, o usuário declara ter lido, compreendido e
                concordado integralmente com estes termos. Caso não concorde, deve interromper o uso.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                2. Objeto do site
              </h2>
              <p>
                Este site tem finalidade exclusivamente <strong>institucional e informativa</strong>.
                Apresenta o método, os pilares e os produtos relacionados (livro "Pesquisador Produtivo"
                e Quiz do Perfil de Produtividade), e direciona o usuário para páginas externas onde
                tais produtos podem ser conhecidos ou adquiridos. Este site, por si só, não realiza
                vendas nem coleta pagamentos.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                3. Propriedade intelectual
              </h2>
              <p>
                Todo o conteúdo publicado — incluindo textos, marca, identidade visual, nome do método,
                nomenclatura dos 8 pilares, materiais derivados e a estrutura editorial das páginas — é
                protegido por direitos autorais e de propriedade industrial e pertence ao Método PCI ou
                a seus licenciadores.
              </p>
              <p className="mt-3">
                É vedada a reprodução, redistribuição, adaptação, tradução, engenharia reversa ou uso
                comercial, total ou parcial, sem autorização prévia e expressa por escrito.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                4. Uso permitido
              </h2>
              <p>O usuário compromete-se a:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Utilizar o site apenas para fins lícitos e pessoais de consulta.</li>
                <li>Não interferir no funcionamento, segurança ou integridade do site.</li>
                <li>Não utilizar robôs, scrapers ou meios automatizados para coleta massiva de conteúdo.</li>
                <li>Não atribuir ao Sistema A.C.A.D.E.M.I.A. promessas, garantias ou resultados não declarados oficialmente.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                5. Natureza do conteúdo
              </h2>
              <p>
                O Sistema A.C.A.D.E.M.I.A. é um <strong>método de organização e produtividade acadêmica</strong>.
                Não constitui aconselhamento clínico, psicológico, psiquiátrico, jurídico, financeiro ou
                acadêmico-institucional. Eventuais menções a saúde mental do pesquisador têm caráter
                educativo e estrutural, não substituem acompanhamento profissional especializado e não
                devem ser interpretadas como diagnóstico ou tratamento.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                6. Links para sites externos
              </h2>
              <p>
                O site contém links para domínios de terceiros (por exemplo, páginas de venda do livro,
                quiz diagnóstico e materiais complementares). O Método PCI não se responsabiliza pelo
                conteúdo, políticas, disponibilidade ou eventuais danos decorrentes do uso desses sites
                externos.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                7. Limitação de responsabilidade
              </h2>
              <p>
                O conteúdo é fornecido "no estado em que se encontra". O Método PCI não garante que o
                site estará sempre disponível, livre de erros ou de interrupções. Na máxima extensão
                permitida pela legislação aplicável, não responderemos por danos indiretos, lucros
                cessantes ou perda de oportunidades decorrentes do uso ou da impossibilidade de uso do
                site.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                8. Alterações
              </h2>
              <p>
                Podemos atualizar estes Termos a qualquer tempo, publicando a nova versão nesta página
                com a data de atualização. O uso continuado do site após alterações implica aceitação
                tácita da versão vigente.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                9. Legislação e foro
              </h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o
                foro da Comarca de Goiânia/GO para dirimir quaisquer controvérsias, com renúncia
                expressa a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                10. Contato
              </h2>
              <p>
                Dúvidas sobre estes Termos podem ser enviadas para{" "}
                <a href="mailto:contato@metodopci.com.br" className="text-accent underline">
                  contato@metodopci.com.br
                </a>
                .
              </p>
            </section>

            <div className="pt-6">
              <Link to="/" className="text-sm text-accent hover:underline">
                ← Voltar para a página inicial
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Termos;
