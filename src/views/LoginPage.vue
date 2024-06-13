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
    <hr>
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <label for="registerEmail">Электронная почта:</label>
      <input type="email" id="registerEmail" v-model="registerEmail" required>
      <label for="registerPassword">Пароль:</label>
      <input type="password" id="registerPassword" v-model="registerPassword" required>
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p v-if="registerError">{{ registerError }}</p>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      registerEmail: '',
      registerPassword: '',
      error: null,
      registerError: null
    };
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    return {
      store,
      router
    };
  },
  methods: {
    async login() {
      try {
        await this.store.dispatch('login');
        this.router.push('/'); // Переход на страницу приложения после входа
      } catch (err) {
        console.error('Login error:', err.message);
        this.error = err.message;
      }
    },
    async register() {
    }
  }
};
</script>
