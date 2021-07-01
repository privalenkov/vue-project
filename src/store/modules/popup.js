export default ({
  state: {
    isShown: false,
  },
  mutations: {
    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
  actions: {
    toggleShow({ commit }) {
      commit('toggle');
    },
  },
  getters: {
    getIsShown(state) {
      return state.isShown;
    },
  },
});
