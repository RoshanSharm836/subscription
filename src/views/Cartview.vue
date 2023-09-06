<template>
  <div>
    <navbar />
    <div class="cart flex flex-row gap-3 flex-wrap justify-evenly">
      <div class="text-4xl" v-if="cartdata.length === 0">
        Pls add some products
      </div>
      <div v-for="(el, index) in cartdata" :key="index">
        <Subcard v-bind:data="el" v-bind:compo="compo" />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/Navbar.vue";
import Subcard from "../components/Subcard.vue";
export default {
  name: "cart",
  components: { Subcard, navbar },
  data() {
    return {
      cartdata: [],
      compo: "cart",
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
    console.log(this.cartdata);
  },
};
</script>

<style>
.cart {
  margin-top: 10rem;
}
</style>
