<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img v-bind:src="data.image" alt="Shoes" class="w-full" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ data.name }}</h2>
      <p>{{ data.qnt }}</p>
      <p class="font-bold">{{ data.price }}</p>
      <div class="card-actions justify-end">
        <button
          v-if="compo != 'cart'"
          class="btn btn-error text-white"
          @click="addtolocalstorage(data)"
        >
          Subcription
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
  },
};
</script>
<style></style>
