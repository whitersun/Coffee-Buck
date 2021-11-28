<template>
  <ion-list class="ion-padding-start">
    <swiper
      class="swiper-block-005 ion-padding-start"
      :slides-per-view="2"
      :free-mode="true"
      :pagination="true"
      @swiper="onSwiper"
    >
      <template v-if="listItemArray.length > 0">
        <template v-for="(item, i) in listItemArray" :key="i">
          <swiper-slide>
            <ion-card class="ion-padding" button>
              <div class="wrap-image">
                <ion-img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.name"
                  :style="!imgLoaded ? (Opacity = 0) : (Opacity = 1)"
                  @ionImgWillLoad="imgIsLoading($event)"
                  @ionImgDidLoad="imgIsLoaded($event)"
                  @ionError="imgIsError()"
                ></ion-img>
                <template v-if="!imgLoaded">
                  <ion-skeleton-text
                    animated
                    :style="imgSkeletonLoadingCss"
                  ></ion-skeleton-text>
                </template>

                <template v-else-if="imgGotError && imgLoaded">
                  <img src="http://placeholder.it/128x221" alt="placeholder" />
                </template>

                <template v-else-if="!item.image || !item.hasOwnProperty('image')">
                  <ion-skeleton-text
                    animated
                    style="width: 100%; height: 100%"
                  ></ion-skeleton-text>
                </template>
                <ion-badge>
                  <ion-icon :icon="star"></ion-icon>
                  {{ item.rate }}
                </ion-badge>
              </div>
              <ion-card-header class="ion-no-padding">
                <ion-card-subtitle>{{ item.subtitle }}</ion-card-subtitle>
                <ion-card-title>
                  {{ item.name }}
                </ion-card-title>
              </ion-card-header>

              <ion-card-content class="ion-no-padding">
                <ion-label color="white"> $ {{ item.price }} </ion-label>

                <ion-button shape="round" color="orange" size="small">
                  <ion-icon
                    slot="icon-only"
                    color="white"
                    size="small"
                    :icon="add"
                  ></ion-icon>
                </ion-button>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
        </template>
      </template>

      <template v-else>
        <swiper-slide class="w-100 text-center"> No Information</swiper-slide>
      </template>
    </swiper>
  </ion-list>
</template>

<script lang="ts">
import {
  IonImg,
  IonList,
  IonIcon,
  IonCard,
  IonLabel,
  IonBadge,
  IonButton,
  IonicSwiper,
  IonicSlides,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonSkeletonText,
} from "@ionic/vue";
import { ref, onMounted, defineComponent, computed } from "vue";
import { add, star } from "ionicons/icons";

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay, Lazy, FreeMode } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/mousewheel";
import "swiper/css/virtual";
import "swiper/css/pagination";

SwiperCore.use([IonicSwiper, Pagination, A11y, Autoplay, Lazy, IonicSlides, FreeMode]);

export default defineComponent({
  name: "ListBox",
  components: {
    IonBadge,
    IonCard,
    IonImg,
    IonList,
    IonLabel,
    IonButton,
    IonIcon,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonSkeletonText,
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      add,
      star,
    };
  },
});
</script>

<script lang="ts" setup>
const props: any = defineProps({
  listItem: { type: Object },
  listCategory: { type: String, default: "Cappuccino" },
});

const imgLoaded = ref(false);
const imgGotError = ref(false);

const imgSkeletonLoadingCss =
  "width: 100%; height: 112px; border-radius: 10px; margin: 0";
const imgLoadingCss = "position: absolute; opacity: 0; transition: opacity 500ms ease;";
const imgLoadedCss =
  "position: relative; width: 100%; height: auto; border-radius: 10px; opacity: 1; transition: opacity 500ms ease;";

const imgIsLoading = (event: any) => {
  event.target.setAttribute("style", imgLoadingCss);
  return imgLoaded.value;
};

const imgIsLoaded = (event: any) => {
  event.target.setAttribute("style", imgLoadedCss);
  imgLoaded.value = true;
};

const imgIsError = () => {
  imgGotError.value = true;
  imgLoaded.value = true;
};

const swiperRef: any = ref(null);

const onSwiper = (swiper: any) => (swiperRef.value = swiper);

const listItemArray = computed(() => {
  const item = props.listItem.filter((item: any) => item.name === props.listCategory);
  return item;
});

onMounted(() => {
  if (props.listItem.length > 0) {
    swiperRef.value.update();
  }

  console.log(props.listCategory);
  console.log(listItemArray.value);
});
</script>

<style lang="scss">
.swiper-block-005 {
  margin-left: 1.3rem;
  margin-right: 1rem;
  margin-bottom: 3rem;
  overflow: visible !important;

  .swiper-pagination-horizontal {
    bottom: -25px !important;

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
    ion-card {
      margin: 0.75rem 0.25rem;
      border-radius: 18px;
      width: 100%;
      height: 15rem;

      &::part(native) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        align-items: baseline;
      }

      .wrap-image {
        position: relative;
        overflow: hidden;
        width: 100%;
        border-radius: 10px;
        box-shadow: #7a462a80 0px 7px 29px;

        ion-badge {
          position: absolute;
          top: 10px;
          right: 10px;

          --background: hsl(0deg 0% 9% / 47%);
          backdrop-filter: blur(5px);
        }
      }

      ion-img::part(image) {
        height: 7rem;
        border-radius: 10px;
        object-fit: cover;
      }

      ion-card-title {
        font-size: 14px;
      }

      ion-card-header {
        text-align: left;
        padding-bottom: 0.5rem;
      }

      ion-card-subtitle {
        font-size: 10px;
      }

      ion-card-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      ion-button::part(native) {
        --border-radius: 10px;
        --padding-start: 5px;
        --padding-end: 5px;
      }
    }
  }

  // .swiper-pagination-bullet-active {
  //   width: 15px !important;
  //   height: 5px !important;
  //   border-radius: 5px !important;
  //   --bullet-background-active: hsl(32deg 99% 50%);
  // }

  // .swiper-pagination.swiper-pagination-bullets {
  //   bottom: 0px;
  // }
}
</style>
