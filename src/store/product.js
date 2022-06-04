import { defineStore } from "pinia";
import products from "../mock/product.json";

export const counterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    cart: [],
    products: [],
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    getProducts() {
      this.products = products;
    },
    addToCart(item) {
      const productInCart = this.cart.find((product) => product.id === item.id);
      if (!productInCart) {
        this.cart.push({ ...item, quantity: 1 });
      } else {
        productInCart.quantity++;
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((product) => product.id !== id);
    },
    addQty(id) {
      const product = this.cart.find((product) => product.id === id);
      product.quantity++;
    },
    removeQty(id) {
      const product = this.cart.find((product) => product.id === id);
      product.quantity--;
      if (product.quantity === 0) {
        this.removeFromCart(id);
      }
    },
    emptyCart() {
      this.cart = [];
    },
    cartContent() {
      for (let i = 0; i < this.cart.length; i++) {
        this.cart[i].total = this.cart[i].price * this.cart[i].quantity;
      }
    },
  },
});
