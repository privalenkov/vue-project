export default ({
  state: {
    toasts: [],
  },
  mutations: {
    pushToast(state, toast) {
      if (state.toasts.length < 3) {
        state.toasts.push({
          ...toast,
          id: (Math.random().toString(36) + Date.now().toString(36).substr(2)),
        });
      }
    },
    filterToast(state, toastToRemove) {
      state.toasts = state.toasts.filter((toast) => {
        const filtToast = toast.id !== toastToRemove.id;
        return filtToast;
      });
    },
  },
  actions: {
    addToast({ commit }, toast) {
      commit('pushToast', toast);
    },
    removeToast({ commit }, toast) {
      commit('filterToast', toast);
    },
  },
  getters: {
    allToasts(state) {
      return state.toasts;
    },
  },
});
