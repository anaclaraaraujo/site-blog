# Site.set - Blog (Next.js & Contentlayer)

Bem-vindo ao repositório do **Site.set Blog**! Este projeto é um blog dinâmico e moderno construído com **Next.js 14**, **Contentlayer** para gerenciamento de conteúdo e **Tailwind CSS** para estilização. Ele oferece uma experiência de usuário fluida, começando com uma landing page interativa e levando os visitantes a uma rica biblioteca de posts de blog.

---

## 🚀 Funcionalidades

* **Landing Page Interativa**: Uma página inicial atraente para apresentar o blog e direcionar os usuários.
* **Listagem de Posts Dinâmica**: Navegue por uma lista de posts do blog, com a capacidade de pesquisar e filtrar conteúdo.
* **Páginas de Posts Otimizadas**: Cada post tem sua própria página dedicada, com conteúdo formatado em Markdown, informações do autor e opções de compartilhamento social.
* **Conteúdo Baseado em Markdown**: Facilidade para criar e gerenciar posts de blog utilizando arquivos Markdown, processados pelo Contentlayer.
* **Geração de Conteúdo Estático (SSG)**: Posts e listagens são pré-renderizados no build time para melhor performance e SEO, utilizando `getStaticProps` e `getStaticPaths` do Next.js.
* **Pesquisa de Posts**: Funcionalidade de busca para encontrar posts específicos.
* **Compartilhamento Social**: Opções para compartilhar posts em diversas redes sociais (LinkedIn, Facebook, Slack, X, Threads) e copiar o link.
* **Design Responsivo**: Experiência otimizada para diferentes tamanhos de tela (desktop, tablet, mobile).

---

## 🛠️ Tecnologias Utilizadas

* **Next.js 14**: Framework React para renderização do lado do servidor e geração de sites estáticos.
* **React**: Biblioteca JavaScript para construção de interfaces de usuário.
* **Contentlayer**: Biblioteca para transformar conteúdo Markdown em dados que podem ser importados diretamente para o seu projeto Next.js.
* **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
* **Lucide React**: Biblioteca de ícones.
* **`remark-gfm`**: Plugin Remark para suportar GitHub Flavored Markdown.

---

## ⚙️ Configuração e Instalação

Para rodar este projeto localmente, siga os passos abaixo:

### 📋 Pré-requisitos

Certifique-se de ter o Node.js (versão 18 ou superior) e o npm (ou Yarn/pnpm) instalados em sua máquina.

### ⬇️ Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/anaclaraaraujo/siteset.git](https://github.com/anaclaraaraujo/siteset.git)
    cd seu-repositorio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    # ou pnpm install
    ```

### ▶️ Rodando o Projeto

1.  **Desenvolvimento:**
    Para iniciar o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou yarn dev
    # ou pnpm dev
    ```
    O aplicativo estará disponível em `http://localhost:3000`.

2.  **Build de Produção:**
    Para construir o projeto para produção:
    ```bash
    npm run build
    # ou yarn build
    # ou pnpm build
    ```

3.  **Iniciando em Produção (Após o Build):**
    Para iniciar o servidor em modo de produção:
    ```bash
    npm run start
    # ou yarn start
    # ou pnpm start
    ```

---

## 📂 Estrutura do Projeto

A estrutura do projeto segue as convenções do Next.js, com algumas pastas adicionais para organização de componentes, templates e conteúdo.

````
.
├── app/                  \# Páginas Next.js (landing, blog, posts)
├── components/           \# Componentes UI reutilizáveis
├── content/              \# Arquivos Markdown dos posts (gerenciado pelo Contentlayer)
├── hooks/                \# Hooks React personalizados (ex: useShare, useClipboard)
├── lib/                  \# Funções utilitárias (ex: cn para classes do Tailwind)
├── public/               \# Assets estáticos (imagens, etc.)
├── templates/            \# Componentes de layout de página (landing-page, blog)
├── contentlayer.config.ts\# Configuração do Contentlayer
├── next.config.mjs       \# Configuração do Next.js
├── tailwind.config.ts    \# Configuração do Tailwind CSS
└── tsconfig.json         \# Configuração do TypeScript

````

---

## 📝 Como Adicionar um Novo Post

Para adicionar um novo post ao blog, você precisa criar um novo arquivo Markdown na pasta `content/posts` (ou a pasta configurada no seu `contentlayer.config.ts`).

Cada arquivo Markdown deve ter um *frontmatter* no início, que contém metadados do post, como título, data, descrição, imagem e autor. Exemplo:

```markdown
---
title: "Seu Novo Título Incrível para o Blog"
date: "2023-10-27T10:00:00.000Z"
description: "Uma breve descrição sobre o conteúdo do seu post."
image: "/images/post-image.jpg"
author:
  name: "Seu Nome"
  avatar: "/images/your-avatar.png"
---

Aqui começa o conteúdo do seu post em Markdown.

Você pode usar **negrito**, *itálico*, [links](https://site.set) e muito mais!

````

Após criar ou modificar um arquivo Markdown, o Contentlayer detectará a mudança e regenerará os dados, que estarão disponíveis para o Next.js.

-----

## 🤝 Contribuição

Contribuições são sempre bem-vindas\! Se você tiver sugestões, melhorias ou encontrar algum bug, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

-----