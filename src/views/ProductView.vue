<template>
  <div>
    <navbar />
    <h1 class="mt-24">Add Product</h1>
    <div class="flex flex-col gap-4">
      <div class="product" v-for="(item, index) in cartdata" :key="index">
        <productcart v-bind:props="item" />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/Navbar.vue";
import productcart from "../components/Productcart.vue";
export default {
  name: "Product",
  components: { productcart, navbar },

  data() {
    return {
      cartdata: [],
    };
  },
  methods: {
    fetchdata() {
      console.log("load");
      let arr = JSON.parse(localStorage.getItem("subcart")) || [];
      this.cartdata = arr;
    },
  },

  mounted() {
    // it is like useffect in react
    this.fetchdata();
    // console.log(this.cartdata);
  },
};
</script>

<style></style>
