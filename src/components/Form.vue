<template>
  <div className="flex flex-col gap-4 mt-20">
    <input
      type="text"
      className="border-solid border-2 bg-gray-100 border-gray-100 p-2"
      placeholder="Add a voucher"
    />
    <div class="w-full justify-between flex">
      <span className="Price_spam">Sub-total</span>
      <span>INR {{ total }}</span>
    </div>
    <div class="w-full justify-between flex">
      <span className="Price_spam">Vat</span>
      <span>INR 0.00 </span>
    </div>
    <div class="w-full justify-between flex">
      <span className="Price_spam">Shipping fee</span>
      <span>INR 0.00 </span>
    </div>
    <hr className=" bg-gray-100" />
    <div class="w-full justify-between flex">
      <span className="Price_spam">Total</span>
      <span>INR {{ total }}</span>
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
      // console.log(this.total);
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

<style></style>
