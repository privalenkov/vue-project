import { createStore } from 'vuex';
import toast from './modules/toast';
import registerForm from './modules/registerForm';
import auth from './modules/auth';
import popup from './modules/popup';

export default createStore({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
  },
  getters: {
    getError: (s) => s.error,
  },
  modules: {
    toast, registerForm, auth, popup,
  },
});
