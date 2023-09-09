<template>
  <div>
    <navbar />
    <div class="w-full flex justify-center">
      <div class="gap-3justify-evenly mainpage">
        <div v-for="data in productarr" :key="data.id" class="w-4/5 m-auto">
          <Subcard v-bind:data="data" />
        </div>
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
          weight: "1kg",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/buttermilk-1-cmzmv61_zi.jpg",
          price: 70.75,
          qnt: 1,
          total: 0,
          subcriptionpack: "daily",
          startdate: "",
        },
        {
          id: 2,
          name: "Dahi/curd",
          weight: "1kg",
          price: 140,
          qnt: 1,
          total: 0,
          subcriptionpack: "daily",
          startdate: "",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/dahi-uqfz54qzzc.png",
        },
        {
          id: 3,
          name: "Panner",
          weight: "1kg",
          price: 440,
          qnt: 1,
          total: 0,
          subcriptionpack: "daily",
          startdate: "",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/fresh-paneer-kqquhiegfk.png",
        },
        {
          id: 4,
          name: "Malai Barfi",
          weight: "1kg",
          price: 600.28,
          qnt: 1,
          total: 0,
          subcriptionpack: "daily",
          startdate: "",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/malai-barfi-rk_0u79ed5.jpg",
        },
        {
          id: 5,
          name: "Buffalo Milk",
          weight: "1kg",
          price: 70,
          qnt: 1,
          total: 0,
          subcriptionpack: "daily",
          startdate: "",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/buffalo-milk-f4fxehhmkh.png",
        },
        {
          id: 6,
          name: "Wheat/Brown Bread",
          weight: "1 Piece",
          price: 60,
          qnt: 1,
          total: 0,
          subcriptionpack: "daily",
          startdate: "",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/wheat-bread-poiqignfdu.jpg",
        },
        {
          id: 7,
          name: "Milk Bread",
          weight: "1kg",
          price: 66,
          qnt: 1,
          total: 0,
          subcriptionpack: "daily",
          startdate: "",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/milk-bread-4kipxv3lre.jpg",
        },
        {
          id: 8,
          name: "Cow Milk",
          weight: "1kg",
          price: 55,
          qnt: 1,
          total: 0,
          subcriptionpack: "daily",
          startdate: "",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/cow-milk-sn0kwee_aw.png",
        },
        {
          id: 9,
          name: "Cow Gee",
          weight: "500 Gm",
          price: 400,
          qnt: 1,
          total: 0,
          subcriptionpack: "daily",
          startdate: "",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/rasgoola-nazuvvxzhs.png",
        },
        {
          id: 10,
          name: "Malai Peda",
          weight: "1kg",
          price: 600,
          qnt: 1,
          total: 0,
          subcriptionpack: "daily",
          startdate: "",
          image:
            "https://ik.imagekit.io/bharatrath/tr:n-medium/royal-hill-farm--7n86/malai-peda-eg507oqhu3.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
