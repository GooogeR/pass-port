<template>
  <div class="login-page">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <label for="email">Электронная почта:</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Пароль:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Войти</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { auth } from '@/firebase/firebaseConfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from 'vuex'; 

export default {
  name: 'LoginPage',
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref(null);
    const router = useRouter();
    const store = useStore(); 

    const login = async () => {
      console.log('Login function called');  
      console.log('Email:', email.value);  
      console.log('Password:', password.value);  

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log('User signed in:', userCredential.user);

        store.commit('setAuthenticated', true);

        router.push('/app');
      } catch (err) {
        console.error('Login error:', err.message);
        error.value = err.message;
      }
    };

    return {
      email,
      password,
      error,
      login
    };
  }
};
</script>
