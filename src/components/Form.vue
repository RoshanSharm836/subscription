<template>
  <div class="form flex flex-col gap-3 w-2/5 mx-auto">
    <h1 class="text-3xl font-bold">Total</h1>
    <div class="form_box flex flex-col gap-3 w-11/12 my-auto">
      <div>
        <span>Item Total</span><span>₹ {{ total }}</span>
      </div>
      <div><span>Delivery Charge</span><span>Free</span></div>
      <hr />
      <div>
        <span>Order Total</span><span>₹ {{ total }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  methods: {
    getdata() {
      let arr = JSON.parse(localStorage.getItem("subcart")) || [];
      let a = arr.reduce((sum, obj) => obj.total + sum, 0);
      this.total = a;
      console.log(this.total);
    },
  },
  mounted() {
    this.getdata();
  },
  data() {
    return {
      total: "",
    };
  },
};
</script>

<style>
.form {
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.form_box > div {
  display: flex;
  justify-content: space-between;
}
</style>
