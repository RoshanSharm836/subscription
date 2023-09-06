<template>
  <nav class="flex justify-between gap-4">
    <span class="cursor-pointer" @click="redirecthome()">
      <img
        src="https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/all-business-logo-ha3ecj1xx8.png"
        alt=""
        class="w-10"
      />
    </span>
    <div class="flex gap-4 center">
      <span class="cursor-pointer" @click="redirect()">Subcription</span>
      <div class="flex gap-2">
        <span> wallet </span>
        <span> {{ amount }}</span>
        <span class="cursor-pointer" @click="redirectpayment()">➕</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar", // name should be in string
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    redirect() {
      this.$router.push("cart");
    },
    redirecthome() {
      this.$router.push("/");
    },
    redirectpayment() {
      this.$router.push("payment");
    },
    fetchamount() {
      let getamoount = JSON.parse(localStorage.getItem("amount")) || 0;
      this.amount = getamoount;
    },
  },
  mounted() {
    this.fetchamount();
    console.log(this.amount);
  },
};
</script>

<style>
nav {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  align-items: center;
  text-transform: capitalize;
  position: fixed;
  z-index: 100;
  width: 100%;
  background: #1d232a;
  padding: 10px 30px;
  top: 0;
}
</style>
