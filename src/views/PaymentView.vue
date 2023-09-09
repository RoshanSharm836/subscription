<template>
  <div>
    <navbar />
    <div class="payment_box flex flex-col gap-8">
      <h1 class="text-5xl">Add money in wallet</h1>
      <!-- input for custom amount deposite -->
      <form class="flex flex-col justify-center gap-5">
        <input
          type="text"
          placeholder="Pls enter amount"
          class="input input-bordered w-full max-w-xs"
          v-model="amount"
        />
        <!-- predefine amount -->

        <div class="price-box flex gap-3 justify-evenly w-full m-auto">
          <span
            class="price_box px-4 py-2 rounded-lg"
            @click="selectprice"
            v-for="(item, index) in arr"
            :key="index"
          >
            {{ item }}
          </span>
        </div>
        <div class="btn btn-error text-white" @click="setinlocal(e)">
          <span> {{ amount }} </span>
          <input type="submit" value="PAY" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import navbar from "../components/Navbar.vue";
export default {
  name: "payment",
  data() {
    return {
      amount: "",
      arr: [500, 1500, 3000, 5000],
    };
  },
  components: { navbar },
  methods: {
    setinlocal() {
      let prevamount = JSON.parse(localStorage.getItem("amount")) || 0;
      let updatedamount = Number(prevamount) + Number(this.amount);
      localStorage.setItem("amount", JSON.stringify(updatedamount));
      alert("done");
    },
    selectprice(event) {
      let selectedamount = +event.target.innerText;
      this.amount = selectedamount;
    },
  },
};
</script>

<style></style>
