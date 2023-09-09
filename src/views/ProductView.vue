<template>
  <div>
    <navbar />
    <h1 class="mt-24 text-center text-3xl font-bold">Add Product</h1>
    <div class="flex flex-col m-auto w-11/12">
      <div class="productbox flex flex-col gap-4 mt-5 w-11/12 m-auto">
        <div class="product" v-for="(item, index) in cartdata" :key="index">
          <productcart v-bind:props="item" />
        </div>
      </div>
      <Form />
    </div>
  </div>
</template>

<script>
import navbar from "../components/Navbar.vue";
import Form from "../components/Form.vue";
import productcart from "../components/Productcart.vue";
export default {
  name: "Product",
  components: { productcart, navbar, Form },

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
