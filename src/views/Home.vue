<template>
  <div class="blog-container">
    <h1 class="blog-title">📝 Meu Blog</h1>

    <div v-if="loading" class="loading">Carregando posts...</div>

    <div v-else class="posts-grid">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PostCard from '../components/PostCard.vue';
import PostService from '../data/PostService.js';

const posts = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    posts.value = await PostService.fetchPosts();
  } catch (err) {
    console.error('Erro ao buscar posts:', err);
  } finally {
    loading.value = false;
  }
});
</script>