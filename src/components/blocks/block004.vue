<template>
  <ion-list>
    <ion-list-header lines="none">
      <h2 class="me-auto">
        Our <br />
        Populate Today
      </h2>
      <ion-button color="medium" class="ion-margin-top">Show more</ion-button>
    </ion-list-header>
    <swiper
      class="swiper-block-004"
      :slides-per-view="1.2"
      :space-between="20"
      :centered-slides="true"
      :center-insufficient-slides="true"
      :centered-slides-bounds="true"
      :create-elements="true"
      :free-mode="true"
      @swiper="onSwiper"
    >
      <template v-for="(img, i) in imageArray" :key="i">
        <swiper-slide>
          <div>
            <ion-img
              :src="img.path"
              class="swiper-lazy custom-rounded block004-img-class"
              @ionImgWillLoad="imgIsLoading($event)"
              @ionImgDidLoad="imgIsLoaded($event)"
            />
            <figcaption class="ion-margin-top">
              <ion-badge color="danger">new</ion-badge>
              <div>
                <ion-label>{{ img.name }}</ion-label>
              </div>
            </figcaption>
          </div>
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

<script lang="ts">
import {
  IonList,
  IonListHeader,
  IonButton,
  IonImg,
  IonSkeletonText,
  IonBadge,
  IonLabel,
} from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// import { reactive } from "@vue/reactivity";

export default defineComponent({
  name: "VueBlock004",

  components: {
    IonList,
    IonListHeader,
    IonButton,
    Swiper,
    SwiperSlide,
    IonImg,
    IonSkeletonText,
    IonBadge,
    IonLabel,
  },
});
</script>

<script setup>
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/free-mode";
import { IonicSwiper } from "@ionic/vue";
import SwiperCore, { A11y, Autoplay, Lazy } from "swiper";
import { ref } from "@vue/reactivity";
import { defineComponent, onMounted } from "@vue/runtime-core";

SwiperCore.use([IonicSwiper, A11y, Autoplay, Lazy]);

const image1 =
  "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1337&q=80";
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

<style lang="scss" scoped>
.swiper-block-004 {
  margin-top: 1rem;
  margin-left: 1.3rem;
  margin-right: 1rem;

  ion-img.block004-img-class::part(image) {
    border-radius: 10px;
    width: 100%;
    height: 20rem;
    object-fit: cover;
    opacity: 0.5;
    transition: all 500ms ease;
  }
  .swiper-slide-active {
    ion-img::part(image) {
      opacity: 1;
    }
  }
}
</style>
