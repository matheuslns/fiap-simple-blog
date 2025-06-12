
# 📝 Blog em Vue.js

Este é um projeto simples de blog desenvolvido com **Vue 3 + Vite**, que consome postagens de uma API externa (BFF - Backend For Frontend).

## 🚀 Funcionalidades

- Listagem de postagens com título, descrição, autor, data e imagem.
- Página de detalhes para cada post.
- Exibição das 5 últimas notícias no final da página de detalhe.
- Carregamento assíncrono com feedback visual (loading).
- Navegação entre posts usando Vue Router.

## 📦 Tecnologias utilizadas

- Vue 3 + Vite
- Vue Router
- Fetch API
- CSS simples para estilização

## 📁 Estrutura do projeto

```
src/
├── assets/            # Imagens e estilos
├── components/        # Componentes reutilizáveis (PostCard.vue, etc)
├── data/              # PostService.js para consumir a API
├── views/             # Páginas (Home.vue, Post.vue)
├── router/            # Definição das rotas
└── App.vue
```

## ▶️ Como rodar o projeto localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/matheuslns/fiap-simple-blog.git
   cd fiap-simple-blog
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute em modo desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Build para produção**:
   ```bash
   npm run build
   ```

## 🔗 API de Posts

Este projeto consome os dados de um backend acessível via:

```
GET https://fiap-bff-blog.onrender.com/posts
```

A resposta esperada é um array de objetos com a seguinte estrutura:

```json
{
  "id": 1,
  "title": "Título do post",
  "description": "Breve descrição",
  "content": "Conteúdo completo",
  "author": "Nome do autor",
  "publishedAt": "2025-06-10T12:00:00Z",
  "url": "slug-ou-url-unica",
  "urlToImage": "https://link-da-imagem.jpg"
}
```

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
