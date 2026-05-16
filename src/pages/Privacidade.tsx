import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Privacidade = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24 px-4">
        <article className="container mx-auto max-w-3xl">
          <p className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
            Documento legal
          </p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">
            Política de Privacidade
          </h1>
          <p className="font-serif text-sm text-muted-foreground mb-10">
            Última atualização: 16 de maio de 2026
          </p>

          <div className="space-y-8 font-serif text-base text-foreground leading-relaxed">
            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                1. Quem somos
              </h2>
              <p>
                Esta Política de Privacidade descreve como o <strong>Método PCI LTDA</strong>{" "}
                ("nós"), controlador dos dados, trata informações coletadas por meio do site
                institucional do <strong>Sistema A.C.A.D.E.M.I.A</strong>, em conformidade com a Lei
                Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                2. Dados que coletamos
              </h2>
              <p>Este site é predominantemente <strong>institucional e estático</strong>. Podemos coletar:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, sistema
                  operacional, páginas visitadas, tempo de permanência, referrer e dispositivo.
                </li>
                <li>
                  <strong>Cookies e tecnologias similares:</strong> para funcionamento básico do site
                  e métricas agregadas de audiência.
                </li>
                <li>
                  <strong>Dados de contato voluntário:</strong> quando o usuário nos envia um e-mail
                  espontaneamente, coletamos as informações que ele optar por compartilhar.
                </li>
              </ul>
              <p className="mt-3">
                Este site, por si só, <strong>não realiza cadastros, vendas ou login de usuário</strong>.
                Eventuais cadastros e pagamentos ocorrem em sites externos de parceiros (por exemplo,
                página do livro e do quiz), que possuem suas próprias políticas de privacidade.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                3. Para que usamos os dados
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Manter o site funcionando, seguro e estável.</li>
                <li>Medir audiência de forma agregada e melhorar o conteúdo institucional.</li>
                <li>Responder a mensagens enviadas por e-mail.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                4. Base legal
              </h2>
              <p>
                Tratamos dados com base nas hipóteses legais da LGPD aplicáveis: <strong>legítimo
                interesse</strong> (operação do site e métricas agregadas), <strong>consentimento</strong>{" "}
                (cookies não essenciais, quando aplicável) e <strong>cumprimento de obrigação
                legal</strong>.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                5. Cookies
              </h2>
              <p>
                Utilizamos cookies essenciais ao funcionamento do site e podemos utilizar cookies
                analíticos (por exemplo, provedores de métricas) para entender, de forma agregada,
                como o conteúdo é consumido. O usuário pode bloquear ou apagar cookies nas
                configurações de seu navegador; isso pode afetar a experiência de navegação.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                6. Compartilhamento com terceiros
              </h2>
              <p>Podemos compartilhar dados estritamente necessários com:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provedores de hospedagem e infraestrutura.</li>
                <li>Ferramentas de análise de audiência e desempenho.</li>
                <li>Autoridades públicas, mediante requisição legal.</li>
              </ul>
              <p className="mt-3">
                Não vendemos dados pessoais nem os utilizamos para perfilamento publicitário invasivo.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                7. Transferência internacional
              </h2>
              <p>
                Alguns provedores podem armazenar dados em servidores fora do Brasil. Nesses casos,
                exigimos níveis de proteção compatíveis com a LGPD.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                8. Tempo de retenção
              </h2>
              <p>
                Dados de navegação e logs são mantidos pelo tempo necessário para fins de segurança,
                métricas agregadas e cumprimento de obrigações legais. Mensagens de contato são
                mantidas pelo tempo necessário ao atendimento do pedido e eventual histórico de
                relacionamento.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                9. Direitos do titular
              </h2>
              <p>Nos termos da LGPD, o titular pode solicitar:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Confirmação da existência de tratamento de seus dados.</li>
                <li>Acesso, correção, anonimização ou eliminação de dados.</li>
                <li>Portabilidade, quando aplicável.</li>
                <li>Informação sobre compartilhamentos e revogação de consentimento.</li>
              </ul>
              <p className="mt-3">
                As solicitações podem ser feitas para{" "}
                <a href="mailto:contato@metodopci.com.br" className="text-accent underline">
                  contato@metodopci.com.br
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                10. Segurança da informação
              </h2>
              <p>
                Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra
                acessos não autorizados, perdas e usos indevidos. Nenhum sistema, contudo, é
                absolutamente imune a falhas; em caso de incidente relevante, agiremos conforme a
                LGPD.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                11. Saúde mental e conteúdo educativo
              </h2>
              <p>
                Eventuais menções a saúde mental do pesquisador têm caráter educativo e estrutural.
                O site não coleta informações sensíveis de saúde dos usuários nem realiza qualquer
                tipo de avaliação clínica.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                12. Alterações desta Política
              </h2>
              <p>
                Esta Política pode ser atualizada periodicamente. A versão vigente estará sempre
                publicada nesta página, com a respectiva data de atualização.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-primary mb-3">
                13. Encarregado (DPO) e contato
              </h2>
              <p>
                Para qualquer questão relacionada à privacidade e proteção de dados, entre em
                contato pelo e-mail{" "}
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

export default Privacidade;
