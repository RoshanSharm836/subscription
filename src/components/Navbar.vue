<template>
  <nav class="">
    <div class="w-11/12 m-auto flex justify-between gap-4 items-center">
      <span class="cursor-pointer" @click="redirecthome()">
        <img
          src="https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/all-business-logo-ha3ecj1xx8.png"
          alt=""
          class="w-10"
        />
      </span>
      <div class="flex gap-4 center">
        <span class="cursor-pointer" @click="redirect()"
          >Current Subcription</span
        >
        <span class="cursor-pointer" @click="redirecttoproduct()"
          >Start Subcription</span
        >
        <div class="flex gap-2 items-center">
          <Icon icon="cil:wallet" style="color: grey" />

          <span> {{ amount }}</span>
          <span class="cursor-pointer" @click="redirectpayment()">➕</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<script>
export default {
  name: "navbar", // name should be in string
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    redirecttoproduct() {
      this.$router.push("product");
    },
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

<style></style>
