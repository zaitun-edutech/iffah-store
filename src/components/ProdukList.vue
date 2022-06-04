<template>
  <div class="row justify-content-center">
    <div
      class="card shadow-sm rounded mb-3 mr-2"
      style="width: 12rem"
      v-for="i in data"
      :key="i.id"
    >
      <img :src="i.imgUrl" class="card-img-top" :alt="i.title" />
      <div class="card-body">
        <h5 class="card-title">{{ i.title }}</h5>
        <p class="card-text">$ {{ i.price.toLocaleString() }}</p>
        <button class="btn btn-primary" @click="addCart(i)">Add To Cart</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue-demi";
import { counterStore } from "../store/product";

const counter = counterStore();
const data = computed(() => counter.products);
const cart = computed(() => counter.cart);
onMounted(() => {
  counter.getProducts();
});
const addCart = (id) => {
  counter.addToCart(id);
};
</script>
<style scoop>
.card {
  padding: 20px;
  border: none;
}
</style>