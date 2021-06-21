export default ({
  state: {
    name: 'ИП',
    phone: '',
  },
  mutations: {
    setName(state, payload) {
      state.name = payload.name;
    },
    setPhone(state, payload) {
      state.phone = payload.phone;
    },
  },
  actions: {
    changeName({ commit }, payload) {
      commit('setName', payload);
    },
    changePhone({ commit }, payload) {
      commit('setPhone', payload);
    },
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getPhone(state) {
      return state.phone;
    },
  },
});
