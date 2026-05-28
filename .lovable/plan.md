O painel administrativo está travando devido a uma lógica de proteção de rotas muito sensível ao tempo de carregamento da sessão no `AdminLayout` e no `useProfile`. Vou reconstruir a estrutura do painel para usar um roteamento mais robusto e nativo do React Router, separando a verificação de autenticação da renderização dos componentes principais.

### Mudanças Propostas

1. **Novo Componente ProtectedRoute**: Criar um componente dedicado apenas para validar se o usuário está logado antes de tentar renderizar qualquer parte do painel.
2. **Refatoração do AdminLayout**: Simplificar o layout para que ele não bloqueie a renderização com telas de carregamento infinitas. Ele apenas fornecerá a moldura (sidebar) para o conteúdo.
3. **Refatoração do useProfile**: Melhorar a resiliência do hook para retornar estados claros de "não autenticado" ou "carregando" sem causar loops de re-renderização.
4. **Atualização do App.tsx**: Implementar o `ProtectedRoute` no roteamento central para que o acesso seja verificado antes mesmo do componente da página ser montado.

### Detalhes Técnicos

- **src/components/ProtectedRoute.tsx**: Novo componente que envolve rotas administrativas. Se não houver sessão, redireciona para `/auth`.
- **src/App.tsx**: Ajustar as rotas `/admin/*` para usarem o novo `ProtectedRoute`.
- **src/components/AdminLayout.tsx**: Remover as telas de bloqueio internas; o layout passará a assumir que, se está sendo renderizado, o acesso já foi validado pelo roteador.
- **src/pages/AdminPostEditor.tsx**: Adicionar logs e verificações extras para garantir que a transição entre listagem e editor não cause travamentos.
