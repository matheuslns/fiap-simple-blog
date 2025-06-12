<template>
  <router-link :to="{ name: 'PostDetail', params: { url: post.url } }" style="color: inherit; text-decoration: none;">
    <div class="post-card">
      <img :src="post.urlToImage" alt="Imagem do post" class="post-image" />
      <div class="post-content">
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-description">{{ post.description }}</p>

        <div class="post-meta">
          <span class="author">✍️ {{ post.author }}</span>
          <span class="date">📅 {{ formatDate(post.publishedAt) }}</span>
        </div>

        <span class="read-more">Ler mais →</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  post: Object
});

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
}
</script>
