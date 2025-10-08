## 💻 Interface de Usuário Moderna e Segura

**Desenvolvida em Next.js 15 com NextAuth (React + TypeScript)**

O frontend é a camada de apresentação da plataforma de e-commerce e gestão de conteúdo digital, projetada para oferecer **alta performance, segurança e uma experiência de uso fluida**.
Desenvolvido em **Next.js 15**, o sistema adota práticas modernas de **SSR (Server-Side Rendering)** e **otimização de rotas**, garantindo carregamento rápido e navegação consistente.

---

### 🔒 Autenticação e Segurança (NextAuth)

A autenticação foi implementada com **NextAuth**, priorizando **usabilidade e proteção de dados**.

* **Login Versátil:** suporte a login tradicional (e-mail/senha) e login social via provedores (Google, entre outros).
* **Gestão de Sessões Seguras:** persistência de autenticação confiável, integrando-se ao backend via JWT.
* **Controle de Acesso:** restrição automática de páginas e rotas privadas, garantindo que apenas usuários autenticados acessem áreas sensíveis.

---

### 🛍️ Experiência de Navegação e Compra

A estrutura de rotas e componentes foi pensada para **guiar o usuário de forma intuitiva**, desde o acesso inicial até a conclusão da compra.

* **Home Page Dinâmica:** exibe produtos em destaque, últimos adicionados e seções estratégicas.
* **Listagem por Categorias:** organização visual clara e filtragem eficiente.
* **Página de Categorias (`/categoria`):** mostra todos os produtos da categoria selecionada.
* **Filtro de Busca Inteligente:** pesquisa por nome ou categoria, com resultados dinâmicos e alto desempenho.

---

### 🛒 Carrinho, Checkout e Pagamento Seguro

O fluxo de compra foi projetado para maximizar a conversão, garantir segurança e simplificar a jornada do usuário.

* **Sistema de Carrinho (Cart):** permite incluir e remover produtos com atualização instantânea.
* **Página de Checkout (`/cart`):**

  * Exibição do total geral e dos itens adicionados.
  * Possibilidade de editar o carrinho antes da finalização.
  * **Checkbox obrigatório** de aceite dos **Termos e Condições**, garantindo conformidade legal.
* **Integração Segura com Gateway de Pagamento:**

  * A aplicação realiza **chamadas à API de pagamento**, direcionando o usuário para um **ambiente seguro e certificado** do provedor.
  * **Nenhum dado sensível** (como número de cartão ou credenciais financeiras) é armazenado em nossos bancos de dados, assegurando conformidade com **boas práticas de segurança e LGPD**.

---

### ⚙️ Resiliência e Feedback ao Usuário

A interface foi construída com foco na confiabilidade e na comunicação clara com o usuário.

* **Tratamento de Erros Amigável:** feedback imediato para falhas em requisições, conexões ou autenticação.
* **Tela de Erro Dedicada:** exibe mensagens personalizadas para cada tipo de falha, mantendo a credibilidade e a consistência visual da aplicação.

---

### 🧩 Integração Completa com o Backend

A aplicação front-end comunica-se diretamente com a API em NestJS, utilizando **fetch seguro com tokens JWT** e **validação de sessão via NextAuth**.
Todo o fluxo — login, listagem, carrinho, checkout e download — é sincronizado com o backend em tempo real, garantindo integridade entre as camadas.

---

### 🚀 Resumo da Solução Full Stack

> O projeto representa uma **solução full stack moderna**, utilizando:
>
> * **Backend:** NestJS ( SOLID, Webhooks, recuperação de carrinhos e integração AWS ...)
> * **Frontend:** Next.js 15 (NextAuth, SSR, filtros dinâmicos, checkout seguro e fluxo de compra completo)
>
> Juntas, as camadas entregam uma plataforma **segura, escalável e confiável**, com foco em **proteção de dados, desempenho e conversão**.
