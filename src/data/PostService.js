export default class PostService {
  static async fetchPosts() {
    const response = await fetch('https://fiap-bff-blog.onrender.com/posts');

    if (!response.ok) {
      throw new Error('Erro ao buscar os posts');
    }

    return await response.json();
  }
}
