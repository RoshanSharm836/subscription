<template>
  <div>
    <navbar />
    <div class="flex flex-row gap-3 flex-wrap justify-evenly mainpage">
      <div v-for="data in productarr" :key="data.id">
        <Subcard v-bind:data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/Navbar.vue";
import Subcard from "../components/Subcard.vue";

export default {
  name: "subcription",
  components: { Subcard, navbar },
  methods: {},
  data() {
    return {
      productarr: [
        {
          id: 1,
          name: "Idli/Dosa Batter (डोसा बैटर)",
          qnt: "1kg",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/buttermilk-1-cmzmv61_zi.jpg",
          price: "₹70",
        },
        {
          id: 2,
          name: "Dahi/curd",
          qnt: "1kg",
          price: "₹140",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/dahi-uqfz54qzzc.png",
          price: "₹70",
        },
        {
          id: 3,
          name: "Panner",
          qnt: "1kg",
          price: "₹440",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/fresh-paneer-kqquhiegfk.png",
        },
        {
          id: 4,
          name: "Malai Barfi",
          qnt: "1kg",
          price: "₹600",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/malai-barfi-rk_0u79ed5.jpg",
        },
        {
          id: 5,
          name: "Buffalo Milk",
          qnt: "1kg",
          price: "₹70",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/buffalo-milk-f4fxehhmkh.png",
        },
        {
          id: 6,
          name: "Wheat/Brown Bread",
          qnt: "1 Piece",
          price: "₹60",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/wheat-bread-poiqignfdu.jpg",
        },
        {
          id: 7,
          name: "Milk Bread",
          qnt: "1kg",
          price: "₹66",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/milk-bread-4kipxv3lre.jpg",
        },
        {
          id: 8,
          name: "Cow Milk",
          qnt: "1kg",
          price: "₹55",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/cow-milk-sn0kwee_aw.png",
        },
        {
          id: 9,
          name: "Cow Gee",
          qnt: "500 Gm",
          price: "₹400",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/rasgoola-nazuvvxzhs.png",
        },
        {
          id: 10,
          name: "Malai Peda",
          qnt: "1kg",
          price: "₹600",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/malai-peda-eg507oqhu3.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.mainpage {
  position: absolute;
  top: 6rem;
}
</style>
