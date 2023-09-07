<template>
  <div class="flex w-11/12 m-auto gap-3">
    <img v-bind:src="props.image" alt="img" class="product_img" />
    <div class="flex w-11/12 items-center m-auto product_box">
      <div class="product_details">
        <h1>{{ props.name }}</h1>
        <h3>{{ props.weight }}</h3>
      </div>
      <div class="product_btm flex gap-3 items-center">
        <button
          class="btn btn-active btn-accent"
          @click="dec"
          :disabled="state.qnt === 0"
        >
          -
        </button>
        <span>{{ state.qnt }}</span>
        <button class="btn btn-active btn-accent" @click="add">+</button>
      </div>
      <div class="price">
        <h1>Rs. {{ props.price }}</h1>
        <h1>total price{{ state.total }}</h1>
      </div>

      <div class="flex justify-around">
        <select @change="fetchlocal" v-model="props.subcriptionpack" id="">
          <option value="daily">daily</option>
          <option value="alternative">alternative</option>
          <option value="monthly">monthly</option>
          <option value="custom">custom</option>
        </select>
        <input @change="fetchlocal" type="date" v-model="props.startdate" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productcart",
  props: ["props"],

  data() {
    return {
      state: {},
    };
  },
  methods: {
    add() {
      this.state.qnt++;
      this.fetchlocal();
      this.total();
    },
    total() {
      this.state.total = this.state.qnt * this.state.price;
      this.fetchlocal();
    },
    fetchlocal() {
      // to set data at localstorage
      let arr = JSON.parse(localStorage.getItem("subcart")) || [];
      let newarr = arr.map((el) => {
        if (el.id === this.state.id) {
          return this.state; // finding object by id and assigning with local obj
        } else {
          return el;
        }
      });
      localStorage.setItem("subcart", JSON.stringify(newarr));
    },
  },
  mounted() {
    this.state = this.props;
    this.total();
  },
};
</script>

<style>
.product_img {
  width: 200px;
}
.product_box > div {
  width: 20%;
}

select,
input {
  padding: 10px;
}
</style>
