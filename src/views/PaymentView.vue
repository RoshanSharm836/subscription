<template>
  <div>
    <navbar />
    <div class="payment_box flex flex-col gap-8">
      <h1 class="text-white text-5xl">Add money in wallet</h1>
      <form class="flex justify-center gap-3" @submit="setinlocal(e)">
        <input
          type="text"
          placeholder="Pls enter amount"
          class="input input-bordered w-full max-w-xs"
          v-model="amount"
        />
        <input class="btn btn-error" type="submit" value="add money" />
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
  },
};
</script>

<style>
.payment_box {
  margin-top: 10rem;
  align-items: center;
  text-transform: capitalize;
}
</style>
