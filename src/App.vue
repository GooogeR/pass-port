<template>
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
            <img src="../src/assets/yandex.png" alt="" class="card-link-img">
            <p class="card-link-text">Яндекс Карты</p>
          </a>
          <a href="#" class="card-link">
            <img src="../src/assets/2gis.png" alt="" class="card-link-img">
            <p class="card-link-text">2Gis</p>
          </a>
          <a href="#" class="card-link">
            <img src="../src/assets/Google.png" alt="" class="card-link-img">
            <p class="card-link-text">Google Карты</p>
          </a>
        </div>
      </div>
      <div class="card-tips">
        <h3 class="card-title">Чаевые</h3>
        <p class="card-semi-title">Обрадовать коллектив</p>
        <div class="card-links-container">
          <a href="#" class="card-link">
            <img src="../src/assets/netmonet.png" alt="" class="card-link-img">
            <p class="card-link-text">нетмонет</p>
          </a>
        </div>
      </div>
      <div class="card-social">
        <h3 class="card-title">Недовольны?</h3>
        <p class="card-semi-title">Напишите нам</p>
        <div class="card-links-container">
          <a href="#" class="card-link">
            <img src="../src/assets/wa.png" alt="" class="card-link-img">
            <p class="card-link-text">WhatsApp</p>
          </a>
          <a href="#" class="card-link">
            <img src="../src/assets/tg.png" alt="" class="card-link-img">
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
  <!-- <div>
    <h1>Firestore Example</h1>
    <input v-model="newName" placeholder="Name" />
    <input v-model="newEmail" placeholder="Email" />
    <input v-model="newPhone" placeholder="Phone" />
    <button @click="addItem">Добавить</button>
    <ul>
      <li v-for="item in items" :key="item.id">
        <p><strong>Name:</strong> {{ item.name }}</p>
        <p><strong>Email:</strong> {{ item.email }}</p>
        <p><strong>Phone:</strong> {{ item.phone }}</p>
      </li>
    </ul>
  </div> -->
</template>

<!-- <script>
import { ref, onMounted } from 'vue';
import { db } from './firebaseconfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default {
  name: 'FirestoreExample',
  setup() {
    const newName = ref('');
    const newEmail = ref('');
    const newPhone = ref('');
    const items = ref([]);

    const addItem = async () => {
      try {
        await addDoc(collection(db, 'users'), {
          name: newName.value,
          email: newEmail.value,
          phone: newPhone.value
        });
        fetchItems();
        newName.value = '';
        newEmail.value = '';
        newPhone.value = '';
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };

    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      items.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    };

    onMounted(() => {
      fetchItems();
    });

    return {
      newName,
      newEmail,
      newPhone,
      items,
      addItem
    };
  }
}; --->

<script>
import StarRating from './components/StarRating.vue';

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

    },
    goToCards() {
      this.showCards = true; 
    }
  }
};
</script>


