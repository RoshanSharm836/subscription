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
          <span class="w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M489.972 119.059a23.839 23.839 0 0 0-17-7.059H456V72a24.027 24.027 0 0 0-24-24H86.627A70.628 70.628 0 0 0 16 118.627v274.746A70.628 70.628 0 0 0 86.627 464h385.4a24.047 24.047 0 0 0 24-23.923l.944-303.995a23.837 23.837 0 0 0-6.999-17.023ZM464.053 432H86.627A38.627 38.627 0 0 1 48 393.373V118.627A38.627 38.627 0 0 1 86.627 80H424v32H88v32h376.947Z"
              />
              <path fill="currentColor" d="M392 264h32v32h-32z" />
            </svg>
          </span>
          <span> {{ amount }}</span>
          <span class="cursor-pointer" @click="redirectpayment()">➕</span>
        </div>
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

<style>
nav {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  align-items: center;
  text-transform: capitalize;
  position: fixed;
  z-index: 100;
  width: 100%;
  background: #eeeeee;
  padding: 10px 30px;
  top: 0;
}
</style>
