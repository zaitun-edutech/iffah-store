<template>
  <div class="row">
    <div class="col-md-12" v-for="(item, index) in data" :key="index">
      <div class="card" style="width: 18rem">
        <img :src="item.imgUrl" class="card-img-top" :alt="item.title" />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">
            {{ item.price.toLocaleString() }}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" v-if="pagination.current_page > 1">
            <a
              class="page-link"
              href="#"
              @click="getData(pagination.current_page - 1)"
            >
              Previous
            </a>
          </li>
          <li class="page-item" v-for="i in pagination.last_page" :key="i">
            <a class="page-link" href="#" @click="getData(i)">
              {{ i }}
            </a>
          </li>
          <li
            class="page-item"
            v-if="pagination.current_page < pagination.last_page"
          >
            <a
              class="page-link"
              href="#"
              @click="getData(pagination.current_page + 1)"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
 
<script setup>
import { computed, ref } from "vue-demi";
import { counterStore } from "../store/product";

const counter = counterStore();
const data = computed(() => counter.products);
const currentPage = ref(1);
const perPage = ref(2);
const totalPage = computed(() => Math.ceil(data.value.length / perPage.value));
const pagination = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  return {
    current_page: currentPage.value,
    last_page: totalPage.value,
    data: data.value.slice(start, end),
  };
});
const getData = (page) => {
  currentPage.value = page;
};
</script>

