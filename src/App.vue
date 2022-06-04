<template>
  <Header />
  <div class="container">
    <div class="row">
      <div class="col-8">
        <ProdukList />
      </div>
      <div class="col-4">
        <Cart />
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from "./components/Header.vue";
import ProdukList from "./components/ProdukList.vue";
import Cart from "./components/Cart.vue";
import Paginate from "./components/Paginate.vue";
</script>

<style>
nav {
  margin-bottom: 30px;
}
</style>
