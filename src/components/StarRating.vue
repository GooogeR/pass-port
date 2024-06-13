<template>
    <div class="stars">
      <img
        v-for="star in stars"
        :key="star"
        :src="star <= rating ? filledStar : emptyStar"
        alt="star"
        @click="setRating(star)"
        class="star"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      initialRating: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        rating: this.initialRating,
        filledStar: require('@/assets/filled-star.svg'),
        emptyStar: require('@/assets/empty-star.svg'),
        stars: [1, 2, 3, 4, 5]
      };
    },
    methods: {
      setRating(star) {
        this.rating = star;
        this.$emit('rating-selected', star);
  
        let scrollElement = null;
        if (star >= 3 && star <= 5) {
          scrollElement = '.card-maps';
        } else if (star === 1 || star === 2) {
          scrollElement = '.card-social';
        }
  
        if (scrollElement) {
          this.scrollToElement(scrollElement);
        }
      },
      scrollToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };
  </script>
  