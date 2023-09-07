<template>
  <div class="card flex-row bg-base-100 shadow-xl w-5/6 m-auto">
    <figure>
      <img v-bind:src="data.image" alt="Shoes" class="w-full lg:w-3/5" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ data.name }}</h2>
      <p>{{ data.weight }}</p>
      <p class="font-bold">₹ {{ data.price }}</p>
      <div class="flex justify-evenly flex-wrap gap-4" v-if="compo == 'cart'">
        <div class="cart_box">
          <span>Quantity:- </span>
          <span>{{ data.qnt }}</span>
        </div>
        <div class="cart_box">
          <span>Pack:- </span>
          <span>{{ data.subcriptionpack }}</span>
        </div>
        <div class="cart_box">
          <span>Starting Date:- </span>
          <span>{{ data.startdate }}</span>
        </div>
      </div>
      <div class="card-actions justify-end">
        <button
          v-if="compo != 'cart'"
          class="btn btn-outline btn-success text-white"
          @click="addtolocalstorage(data)"
        >
          Subcription
        </button>
        <button
          @click="redirecttoproduct"
          v-else-if="compo == 'cart'"
          class="btn btn-outline btn-success text-white"
        >
          edit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subcard",
  props: ["data", "compo"],
  methods: {
    addtolocalstorage(el) {
      let arr = JSON.parse(localStorage.getItem("subcart")) || [];
      arr.push(el);
      localStorage.setItem("subcart", JSON.stringify(arr));
      alert("item Subscribed");
    },
    redirecttoproduct() {
      this.$router.push("product");
    },
  },
  mounted() {
    console.log(this.data.name);
  },
};
</script>
<style>
.cart_box {
  background: #36d399;
  padding: 10px 15px;
  border-radius: 15px;
}
</style>
