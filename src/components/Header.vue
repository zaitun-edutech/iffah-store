<template>
  <nav class="navbar navbar-light bg-secondary">
    <span class="navbar-brand mb-0 h1">Iffah Store</span>
    <span class="navbar-brand mb-0 h1">
      Cart
      <span class="badge badge-primary"> {{ totalQty }}</span>
    </span>
  </nav>
</template>
<script setup>
import { computed } from "vue-demi";
import { counterStore } from "../store/product";

const counter = counterStore();
const data = computed(() => counter.cart);

const totalQty = computed(() => {
  let total = 0;
  data.value.forEach((item) => {
    total += item.quantity;
  });
  return total;
});
</script>
<style scoped>
nav {
  position: relative;
}
</style>