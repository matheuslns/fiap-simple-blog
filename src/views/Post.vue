<template>
  <div class="post-detail">
    <div v-if="loading" class="loading">Carregando post...</div>

    <div v-else-if="post">
      <h1>{{ post.title }}</h1>
      <p class="meta">
        Por {{ post.author }} • {{ formatDate(post.publishedAt) }}
      </p>
      <img :src="post.urlToImage" class="detail-image" />
      <div class="post-content">
        <p>{{ post.content }}</p>
      </div>
    </div>

    <div v-else class="not-found">
      Post não encontrado.
    </div>
  </div>
  <div class="recent-posts" v-if="recentPosts.length">
    <h2>Últimas notícias</h2>
    <ul>
      <li v-for="rp in recentPosts" :key="rp.id">
        <router-link :to="{ name: 'PostDetail', params: { url: rp.url } }">
          <strong>{{ rp.title }}</strong> – {{ formatDate(rp.publishedAt) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import PostService from '../data/PostService.js';

const route = useRoute();
const post = ref(null);
const loading = ref(true);
const recentPosts = ref([]);

async function loadPost(url) {
  loading.value = true;
  try {
    const allPosts = await PostService.fetchPosts();
    post.value = allPosts.find(p => p.url === url);
    recentPosts.value = allPosts
      .filter(p => p.url !== url)
      .slice(0, 5);
  } catch (err) {
    console.error('Erro ao carregar post:', err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadPost(route.params.url);
});

watch(() => route.params.url, (newUrl) => {
  loadPost(newUrl);
});

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
</script>