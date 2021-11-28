<template>
  <!-- List Headers in Lists -->
  <ion-list color="transparent">
    <ion-list-header lines="none">
      <h2 class="me-auto">Our Categories <br />Menu</h2>
      <ion-button color="medium" class="ms-auto">Show more</ion-button>
    </ion-list-header>
    <swiper
      class="swiper-block-002"
      :modules="modules"
      :slides-per-view="1.5"
      :space-between="40"
      :centered-slides="true"
      :center-insufficient-slides="true"
      :centered-slides-bounds="true"
      :create-elements="true"
      :pagination="true"
      @swiper="onSwiper"
    >
      <template v-for="(img, i) in imageArray" :key="i">
        <swiper-slide>
          <div class="backdrop-image">
            <span v-if="img.name">{{ img.name }}</span>
            <ion-skeleton-text v-else animated style="width: 50%"></ion-skeleton-text>
          </div>
          <ion-img
            :src="img.path"
            class="swiper-lazy custom-rounded"
            @ionImgWillLoad="imgIsLoading($event)"
            @ionImgDidLoad="imgIsLoaded($event)"
          />
          <ion-skeleton-text
            v-if="!isLoaded"
            class="ion-no-margin skeleton-loader"
            animated
          ></ion-skeleton-text>
        </swiper-slide>
      </template>
    </swiper>
  </ion-list>
</template>

<script>
import {
  IonImg,
  IonList,
  IonButton,
  IonicSlides,
  IonListHeader,
  IonSkeletonText,
} from "@ionic/vue";
// Import Swiper Vue.js components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/scss";
import "swiper/scss/free-mode";
import "@ionic/vue/css/ionic-swiper.css";

export default {
  name: "VueBlock002",

  components: {
    IonImg,
    Swiper,
    IonList,
    IonButton,
    SwiperSlide,
    IonListHeader,
    IonSkeletonText,
  },

  setup() {
    return {
      modules: [Pagination, IonicSlides],
    };
  },
};
</script>

<script setup>
// Import Swiper styles
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const image1 =
  "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80";
const image2 =
  "https://images.unsplash.com/photo-1536998003793-b13c28fae74b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80";
const image3 =
  "https://images.unsplash.com/photo-1572677343255-b70c4d71cb5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
const image4 =
  "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80";
const image5 =
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80";
const image6 =
  "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80";

const imageArray = [
  { id: 1, name: "Coffee", path: image1 },
  { id: 2, name: "Tea", path: image2 },
  { id: 3, name: "Ice Cream", path: image3 },
  { id: 4, name: "Cake", path: image4 },
  { id: 5, name: "Cookie", path: image5 },
  { id: 6, name: "Smoothies", path: image6 },
];

const swiperRef = ref(null);
const onSwiper = (swiper) => {
  console.log(swiper);

  swiperRef.value = swiper;
};

let isLoaded = ref(false);

const imgLoadingCSS = `position: absolute; opacity: 0; transition: opacity 500ms ease;`;
const imgLoadedCSS = `position: relative; opacity: 1; transition: opacity 500ms ease;`;

const imgIsLoading = (event) => {
  event.target.setAttribute("style", imgLoadingCSS);
  return isLoaded.value;
};
const imgIsLoaded = (event) => {
  event.target.setAttribute("style", imgLoadedCSS);
  isLoaded.value = true;
};

onMounted(() => swiperRef.value.update());
</script>

<style lang="scss">
.swiper-block-002 {
  margin-top: 1rem;
  margin-left: 1.3rem;
  margin-right: 1rem;
  margin-bottom: 3rem;
  overflow: visible !important;

  .swiper-pagination-horizontal {
    // bottom: -50px !important;

    .swiper-pagination-bullet {
      background-color: #fff;
      transition: all 500ms ease;
    }

    .swiper-pagination-bullet-active {
      width: 20px;
      height: 7px;
      border-radius: 5px;
      background-color: #fff;
    }
  }

  .swiper-slide {
    margin: auto;

    .backdrop-image {
      opacity: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      color: #fff;
      display: block;
      contain: strict;
      position: absolute;
      border-radius: 10px;
      transition: all 1000ms ease;
      background-color: #1e334180;

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
      }
    }
  }

  ion-img::part(image) {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    opacity: 0.5;
    transition: all 500ms ease;
  }

  .swiper-slide-active {
    .backdrop-image {
      opacity: 1;
    }

    ion-img::part(image) {
      opacity: 1;
    }
  }
}
</style>
