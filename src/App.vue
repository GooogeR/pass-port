<template>
  test
  <div>
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
  </div>
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

