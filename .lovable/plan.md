A implementação de um blog no Sistema A.C.A.D.E.M.I.A transformará o site de uma landing page estática em um portal de conteúdo, melhorando o SEO e a autoridade do método.

### Estratégia de Implementação

1.  **Arquitetura de Dados**:
    *   Utilizaremos uma estrutura de dados baseada em arquivos (JSON ou Markdown) inicialmente para manter o blog veloz e fácil de gerenciar sem necessidade de um banco de dados complexo imediato.
    *   Posteriormente, poderemos conectar ao Supabase se o volume de posts crescer muito.

2.  **Novas Páginas**:
    *   `/blog`: Listagem de todos os artigos com filtros por categoria (ex: Escrita, Organização, Carreira).
    *   `/blog/:slug`: Página individual do artigo com leitura otimizada.

3.  **Componentes de UI**:
    *   `BlogCard`: Para a listagem.
    *   `BlogSection`: Uma nova seção na Home (`Index.tsx`) mostrando os posts mais recentes para gerar tráfego interno.

4.  **SEO e Metadados**:
    *   Configuração de JSON-LD específico para `BlogPosting` em cada artigo.
    *   Meta tags dinâmicas para compartilhamento em redes sociais.

### Próximos Passos (O que vamos precisar)
*   **Conteúdo**: 2 ou 3 artigos iniciais para popular a área.
*   **Imagens**: Capas para os posts (podemos usar placeholders ou gerar imagens iniciais).
*   **Definição de Categorias**: Quais os pilares principais que o blog abordará (ex: os 8 pilares do método).

---

### Detalhes Técnicos
*   **Tecnologias**: React + React Router para navegação; Lucide React para ícones; Tailwind CSS para o layout responsivo.
*   **SEO**: Integração com as tags já existentes no `index.html`, mas tornando-as dinâmicas por rota.
*   **Performance**: Imagens otimizadas e carregamento progressivo.

**Posso prosseguir com a criação da estrutura base e do primeiro post de exemplo?**