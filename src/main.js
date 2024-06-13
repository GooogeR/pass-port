import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDzmkMlc2if9TkJ5jA3iPgrE3f-WBtHoAA",
    authDomain: "test-6e522.firebaseapp.com",
    projectId: "test-6e522",
    storageBucket: "test-6e522.appspot.com",
    messagingSenderId: "646135476791",
    appId: "1:646135476791:web:f601c87de367a26c26c5b2",
    measurementId: "G-S47P30EPCT"
  };

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
