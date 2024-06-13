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
import { auth } from '@/firebase/firebaseConfig'; // Путь к конфигурации Firebase
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
  try {
    const router = useRouter();

    await signInWithEmailAndPassword(auth, this.email, this.password);

    if (router) {
      router.push('/main');
    } else {
      console.error('Router is not initialized.');
    }
  } catch (err) {
    console.error('Login error:', err.message);
    this.error = err.message;
  }
}
  }
};
</script>
