<template>
  <div class="row justify-content-center">
    <div v-if="!data.length" class="alert alert-secondary" role="alert">
      No Product in cart! Please add some product to cart.
    </div>
    <span v-if="isProses == false">
      <ul class="list-group" v-for="item in data" :key="item">
        <li class="list-group-item">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="removeCart(item.id)"
          >
            <span aria-hidden="false">&times;</span>
          </button>
          <div class="media">
            <img :src="item.imgUrl" :alt="item.title" />
            <div class="media-body">
              <p class="mt-0">{{ item.title }}</p>
              <div class="btn-group">
                <button
                  class="btn-qty btn btn-sm btn-outline-warning"
                  @click="removeQty(item.id)"
                >
                  -
                </button>
                <button class="btn btn-sm btn-secondary text-white">
                  {{ item.quantity }}
                </button>
                <button
                  class="btn-qty btn btn-sm btn-outline-info"
                  @click="addQty(item.id)"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <a
        href="#"
        v-if="data.length"
        class="checkout-button btn btn-sm btn-block btn-success mt-3"
        @click="checkOut"
      >
        <p>ChekOut ($ {{ totalPrice.toLocaleString() }})</p>
      </a>
    </span>
    <div v-if="isProses == true">
      Anda akan Membeli Produk dengan Rincian : <br />
      <div v-for="(item, index) in data" :key="index">
        <span>
          <p>
            {{ index + 1 }}. {{ item.title }} x {{ item.quantity }} = $
            {{ item.price.toLocaleString() }}
          </p>
        </span>
      </div>
      <div btn-group>
        <a :href="waApiUrl" class="btn btn-sm btn-primary">Pesan</a>
        <button class="btn btn-danger btn-sm ml-2" @click="cancel">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue-demi";
import { counterStore } from "../store/product";

const counter = counterStore();
const isProses = ref(false);
const waApiUrl = ref("");
const message = ref("");
const number = ref("6285299658211");
const data = computed(() => counter.cart);
// const addCart = (id) => {
//   counter.addToCart(id);
// };
const removeCart = (id) => {
  counter.removeFromCart(id);
};
const addQty = (id) => {
  counter.addQty(id);
};
const removeQty = (id) => {
  counter.removeQty(id);
};
const totalPrice = computed(() => {
  let total = 0;
  data.value.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
});
const checkOut = () => {
  for (let i = 0; i < data.value.length; i++) {
    message.value += `${data.value[i].title} x ${data.value[i].quantity} = $ ${
      data.value[i].price * data.value[i].quantity + "  " + "\n"
    }`;
    waApiUrl.value = `https://wa.me/${number.value}?text= saya akan memesan : ${message.value}`;
    isProses.value = true;
    console.log(message.value);
  }
};
const cancel = () => {
  isProses.value = false;
};
</script>
<style scoped>
.btn-qty {
  border-radius: 100%;
  width: 30px;
}
.media-body {
  text-align: left;
}
.media {
  width: 90%;
  padding: -30px;
}
img {
  width: 80px;
}
</style>