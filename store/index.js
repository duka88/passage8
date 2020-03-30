export const state = () => ({
  posts: [],
  post: [],
  winWidth: 800,
  isLoading: true
});

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POST(state, post) {
    state.post = post
  },
  IS_LOADING(state, payload){
     state.isLoading = payload;
  },
  SET_WIDTH(state, payload){
     state.winWidth = payload;
  },
}

export const actions = {

  async getPosts({ commit }) {
    let response = await this.$axios.get('http://cms.test/api/posts');
    let posts = response.data.data;

    commit('SET_POSTS', posts);
  },

  async getPost({ commit }, { postSlug }) {

    let response = await this.$axios.get(`http://cms.test/api/post/${postSlug}`)
    let post = response.data.data;

     commit('SET_POST', post);
  }

}
