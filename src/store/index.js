import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false
  },
  mutations: {
    setAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {},
  modules: {}
});
