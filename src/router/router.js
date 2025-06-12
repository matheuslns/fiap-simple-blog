import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/postDetail/:url', name: 'PostDetail', component: Post },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});