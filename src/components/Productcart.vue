<template>
  <div class="flex w-11/12 m-auto gap-3 product_container">
    <img v-bind:src="props.image" alt="img" class="product_img" />
    <div
      class="flex w-11/12 items-center m-auto product_box lg:flex-row sm:flex-col sm:w-11/12 sm:gap-3"
    >
      <div class="product_details sm:w-full lg:w-3/12 sm:m-auto">
        <h1 class="sm:text-center font-bold text-xl">{{ props.name }}</h1>
        <h3>{{ props.weight }}</h3>
      </div>
      <div
        class="product_btm flex gap-3 items-center sm:justify-center sm:w-full lg:w-3/12 sm:m-auto"
      >
        <button
          class="btn btn-active btmcolor"
          @click="sub"
          :disabled="state.qnt === 0"
        >
          -
        </button>
        <span>{{ state.qnt }}</span>
        <button class="btn btn-active btmcolor" @click="add">+</button>
      </div>
      <div
        class="price sm:w-full lg:w-3/12 sm:flex sm:justify-around sm:m-auto gap-2"
      >
        <h1>Rs. {{ props.price }}</h1>
        <h1>Total Price: {{ state.total }}</h1>
      </div>

      <div class="flex justify-around sm:w-full sm:flex sm:justify-around">
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
      flag: "",
    };
  },
  methods: {
    sub() {
      this.state.qnt--;
      this.flag = true;
      this.fetchlocal();
      this.total();
      this.emitEvent();
    },
    add() {
      this.state.qnt++;
      this.flag = false;
      this.fetchlocal();
      this.total();
      this.emitEvent();
    },
    emitEvent() {
      this.$emit("custom-event", this.flag);
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

<style></style>
