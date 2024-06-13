<template>
  <section class="intro-section">
    <div class="container">
      <div class="like">
        <div class="like-title">Всё понравилось?</div>
        <div class="stars">
          <img src="../src/assets/Star.svg" alt="star">
          <img src="../src/assets/Star.svg" alt="star">
          <img src="../src/assets/Star.svg" alt="star">
          <img src="../src/assets/Star.svg" alt="star">
          <img src="../src/assets/Star.svg" alt="star">
        </div>
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
      <div class="card">
        <h3 class="card-title">Всё понравилось?</h3>
        <p class="card-semi-title">Оставьте отзыв</p>
        <div class="card-links-container">
          <a href="#" class="card-link">
            <img src="../src/assets/app-icon.png" alt="" class="card-link-img">
            <p class="card-link-text">Яндекс Карты</p>
          </a>
          <a href="#" class="card-link">
            <img src="../src/assets/app-icon.png" alt="" class="card-link-img">
            <p class="card-link-text">2Gis</p>
          </a>
          <a href="#" class="card-link">
            <img src="../src/assets/app-icon.png" alt="" class="card-link-img">
            <p class="card-link-text">Google Карты</p>
          </a>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">Чаевые</h3>
        <p class="card-semi-title">Обрадовать коллектив</p>
        <div class="card-links-container">
          <a href="#" class="card-link">
            <img src="../src/assets/app-icon.png" alt="" class="card-link-img">
            <p class="card-link-text">нетмонет</p>
          </a>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">Недовольны?</h3>
        <p class="card-semi-title">Напишите нам</p>
        <div class="card-links-container">
          <a href="#" class="card-link">
            <img src="../src/assets/app-icon.png" alt="" class="card-link-img">
            <p class="card-link-text">WhatsApp</p>
          </a>
          <a href="#" class="card-link">
            <img src="../src/assets/app-icon.png" alt="" class="card-link-img">
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

<script>
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
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=IBM+Plex+Sans:wght@500&display=swap');

body {
  margin: 0;
  font-family: "Dela Gothic One", sans-serif;

}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 592px;
  width: calc(100% - 32px);
}

.main-section {
  position: relative;
  background-color: #DEDEDE;

}

.main-section .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.top-bridge {
  height: 50px;
  border-radius: 0 0 50px 50px;
  background-color: #3D6C59;
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
}

.bottom-bridge {
  height: 50px;
  border-radius: 50px 50px 0 0;
  background-color: #3D6C59;
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
}

.like {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
}

.like-title {
  font-size: 22px;
  color: #ffffff;
}

.stars {
  display: flex;
  gap: 10px;
}

.star {
  width: 57px;
  height: 57px;
}

.intro-section {
  background-color: #3D6C59;
  height: 900px;
  position: relative;
}

.company-name-container {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  gap: 15px;
  align-items: center;
}

.company-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
}

.company-name {
  font-size: 15px;
  color: #fff;
}

.card {
  background-color: #fff;
  border-radius: 20px;
  z-index: 1;
  padding: 20px;
  width: 400px;
  box-shadow: 10px 10px 30px 10px #3f3f3f56;
}

.card-links-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
}

.card-link {
  border: 1px solid #000;
  border-radius: 15px;
  display: flex;
  position: relative;
  height: 54px;
  text-decoration: none;
}

.card-link-text {
  font-family: "IBM Plex Sans", sans-serif;
  margin: 0;
  font-size: 14px;
  text-decoration: none;
  line-height: 14px;
  color: #000;
  position: absolute;
  top: 50%;
  left: 60px;
  transform: translateY(-50%);
}

.card-title {
  font-size: 32px;
  margin: 0;
}

.card-link-img {
  width: 30px;
  height: 30px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}

.card-semi-title {
  font-size: 15px;
  margin: 8px 0 0 0;
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 100%;

}

.end-section {
  background-color: #3D6C59;
  height: 900px;
  position: relative;

}

.copyrights {
  color: #E5A2BC;
  font-size: 10px;
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translate(-50%);
}

.slogan {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 20px;
  color: #fff;

}
</style>
