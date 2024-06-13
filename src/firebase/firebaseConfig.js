import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDzmkMlc2if9TkJ5jA3iPgrE3f-WBtHoAA",
  authDomain: "test-6e522.firebaseapp.com",
  projectId: "test-6e522",
  storageBucket: "test-6e522.appspot.com",
  messagingSenderId: "646135476791",
  appId: "1:646135476791:web:f601c87de367a26c26c5b2",
  measurementId: "G-S47P30EPCT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };