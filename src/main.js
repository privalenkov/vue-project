import { createApp } from 'vue';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import firebaseConfig from './firebase.config';
import './registerServiceWorker';
import 'firebase/analytics';
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);
firebase.analytics();

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .mount('#app');
  }
});
