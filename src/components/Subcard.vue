<template>
  <div class="card flex-col bg-base-100 shadow-xl w-5/6 m-auto relative">
    <div class="absolute bg-slate-800 rounded-full p-2 right-2 top-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="M12.001 4.529a5.998 5.998 0 0 1 8.242.228a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464Zm6.826 1.641a3.998 3.998 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a4 4 0 0 0-5.686 5.605L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454Z"
        />
      </svg>
    </div>
    <figure>
      <img v-bind:src="data.image" alt="Shoes" class="w-full m-auto" />
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
      <div class="card-actions justify-center">
        <button
          v-if="compo != 'cart'"
          class="btn btn-outline btn-success text-white"
          @click="addtolocalstorage(data)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Zm3.35 7h7h-7Z"
            />
          </svg>
          Subcription
        </button>
        <button
          @click="redirecttoproduct"
          v-else-if="compo == 'cart'"
          class="btn btn-outline btn-success text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Zm3.35 7h7h-7Z"
            />
          </svg>
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
<style></style>
