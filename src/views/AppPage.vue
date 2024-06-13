<template>
  <div id="app">
    <button @click="goToLogin" class="login-button" v-if="!isLoginPage">
      <img src="@/assets/login.png" alt="Login">
    </button>
    <router-view v-if="!isLoginPage" />
    <LoginPage v-if="isLoginPage" />
    <section class="intro-section">
      <div class="container">
        <div class="like">
          <div class="like-title">Всё понравилось?</div>
          <star-rating @rating-selected="handleRatingSelected" />
        </div>
      </div>
    </section>
    <section class="main-section">
      <div class="top-bridge"></div>
      <div class="container">
        <div class="company-name-container">
          <div class="company-logo"></div>
          <p class="company-name">Автомойка Кирова, 12а</p>
        </div>
        <div class="card-maps">
          <h3 class="card-title">Всё понравилось?</h3>
          <p class="card-semi-title">Оставьте отзыв</p>
          <div class="card-links-container">
            <a href="#" class="card-link">
              <img src="@/assets/yandex.png" alt="" class="card-link-img">
              <p class="card-link-text">Яндекс Карты</p>
            </a>
            <a href="#" class="card-link">
              <img src="@/assets/2gis.png" alt="" class="card-link-img">
              <p class="card-link-text">2Gis</p>
            </a>
            <a href="#" class="card-link">
              <img src="@/assets/Google.png" alt="" class="card-link-img">
              <p class="card-link-text">Google Карты</p>
            </a>
          </div>
        </div>
        <div class="card-tips">
          <h3 class="card-title">Чаевые</h3>
          <p class="card-semi-title">Обрадовать коллектив</p>
          <div class="card-links-container">
            <a href="#" class="card-link">
              <img src="@/assets/netmonet.png" alt="" class="card-link-img">
              <p class="card-link-text">нетмонет</p>
            </a>
          </div>
        </div>
        <div class="card-social">
          <h3 class="card-title">Недовольны?</h3>
          <p class="card-semi-title">Напишите нам</p>
          <div class="card-links-container">
            <a href="#" class="card-link">
              <img src="@/assets/wa.png" alt="" class="card-link-img">
              <p class="card-link-text">WhatsApp</p>
            </a>
            <a href="#" class="card-link">
              <img src="@/assets/tg.png" alt="" class="card-link-img">
              <p class="card-link-text">Telegram</p>
            </a>
          </div>
        </div>
      </div>
      <div class="bottom-bridge"></div>
    </section>
    <section class="end-section">
      <div class="container">
        <small class="copyrights">pass-port business</small>
        <p class="slogan">pass-port business — продвижение на картах</p>
      </div>
    </section>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import StarRating from '@/components/StarRating.vue';

export default {
  components: {
    StarRating
  },
  data() {
    return {
      initialRating: 0,
      showCards: false
    };
  },
  methods: {
    handleRatingSelected(rating) {
      console.log('Selected rating:', rating);
    }
  },
  setup() {
    const route = useRoute(); 

    console.log('Current route:', route);

    return {
      route 
    };
  }
};
</script>
