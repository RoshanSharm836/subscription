<template>
  <div>
    <div class="product">
      <img v-bind:src="props.image" alt="img" />
      <div class="product_details">
        <h1>{{ props.name }}</h1>
        <h3>{{ props.weight }}</h3>
      </div>
      <div class="product_btm">
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

      <div class="product">
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
      total();
    },
    total() {
      this.state.total = this.state.qnt * this.state.price;
      this.fetchlocal();
    },
    fetchlocal() {
      let arr = JSON.parse(localStorage.getItem("subcart")) || [];
      let newarr = arr.map((el) => {
        if (el.id === this.state.id) {
          return this.state;
        } else {
          return el;
        }
      });
      console.log(newarr);
      localStorage.setItem("subcart", JSON.stringify(newarr));
    },
  },
  mounted() {
    this.total();
    this.state = this.props;
  },
};
</script>

<style>
.product {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
}
</style>
