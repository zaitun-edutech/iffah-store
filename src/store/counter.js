import { defineStore } from "pinia";
import product from "../mock/product.json";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    product: [],
    cart: [],
  }),
  getters: {
    getproduct: (state) => state.product,
    getcart: (state) => state.cart,
  },
  actions: {
    getProducts() {
      this.product = product;
    },
    increment() {
      this.count++;
    },
  },
});
