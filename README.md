🍔 Dev & Grill – Frontend

SPA moderna e responsiva para e-commerce

📌 Visão Geral

O Dev & Grill Frontend é uma Single Page Application (SPA) desenvolvida com React, focada em experiência do usuário, performance e integração com pagamentos online.

A aplicação consome uma API REST própria e foi projetada para funcionar corretamente em ambiente de produção, incluindo fallback de rotas e build otimizado.



🎨 Experiência do Usuário

- Layout moderno e intuitivo

- Responsividade total (desktop e mobile)

- Menu hamburger no mobile

- Feedback visual com Toasts

- Checkout integrado ao Stripe



🧠 Decisões Técnicas

- Vite para build rápido e otimizado

- Styled-components para estilos escaláveis

- React Router DOM com suporte a SPA

- Axios para comunicação com a API

- Stripe Elements para pagamentos seguros

- Nginx configurado para SPA fallback



🛠️ Stack Tecnológica

- React

- Vite

- Styled-components

- React Router DOM

- Axios

- Stripe JS

- Docker

- Nginx

- EasyPanel



🏗️ Build & Produção

- Build otimizado

- Servido via Nginx

- onfiguração para evitar erro 404 em reload (SPA)



🐳 Docker & Deploy

- Multi-stage build

- Build em Node

- Runtime em Nginx

- Deploy em VPS usando EasyPanel



🛒 Funcionalidades

- Autenticação

- Listagem de categorias

- Filtro de produtos

- Carrinho de compras

- Checkout com Stripe

- Confirmação de pagamento
