<template>
  <ion-grid class="block-005 ion-padding" fixed>
    <ion-row>
      <template v-for="(item, i) in listCard" :key="i">
        <ion-col size="6">
          <ion-card class="ion-padding ion-no-margin" button>
            <div class="wrap-image">
              <ion-img
                :src="item.image"
                :alt="item.name"
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

              <template v-if="imgGotError && imgLoaded">
                <img src="http://placeholder.it/128x221" alt="placeholder" />
              </template>
              <ion-badge>
                <ion-icon :icon="star"></ion-icon>
                42
              </ion-badge>
            </div>
            <ion-card-header class="ion-no-padding ion-margin-top">
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
        </ion-col>
      </template>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import {
  IonRow,
  IonCol,
  IonGrid,
  IonImg,
  IonIcon,
  IonCard,
  IonLabel,
  IonBadge,
  IonButton,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonSkeletonText,
} from "@ionic/vue";
import { ref } from "@vue/reactivity";
import { defineComponent } from "@vue/runtime-core";
import { add, star } from "ionicons/icons";
export default defineComponent({
  name: "ListBox",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    IonCard,
    IonImg,
    IonLabel,
    IonButton,
    IonIcon,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonSkeletonText,
  },

  setup() {
    return { add, star };
  },
});
</script>

<script lang="ts" setup>
const image001 =
  "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80";

const image002 =
  "https://images.unsplash.com/photo-1511426420268-4cfdd3763b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

const listCard = ref([
  {
    id: 0,
    name: "Cappuccino",
    subtitle: "With Oat Milk",
    price: "4.20",
    image: image001,
  },
  {
    id: 1,
    name: "Cappuccino",
    subtitle: "With Chocolate",
    price: "3.14",
    image: image002,
  },
]);

const imgLoaded = ref(false);
const imgGotError = ref(false);

const imgSkeletonLoadingCss =
  "width: 148px; height: 221px; border-radius: 10px; margin: 0";
const imgLoadingCss = "position: absolute; opacity: 0; transition: opacity 500ms ease;";
const imgLoadedCss =
  "position: relative; width: 148px; height: 221px; border-radius: 10px; opacity: 1; transition: opacity 500ms ease;";

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
</script>

<style lang="scss">
ion-slides.block-005 {
  ion-slide {
    margin-top: 1rem;

    ion-card {
      border-radius: 18px;

      .wrap-image {
        position: relative;
        overflow: hidden;

        ion-badge {
          position: absolute;
          top: 10px;
          right: 10px;

          --background: hsl(0deg 0% 9% / 47%);
          backdrop-filter: blur(5px);
        }
      }

      ion-img::part(image) {
        height: auto;
        border-radius: 10px;
        object-fit: cover;
        box-shadow: #7a462a80 0px 7px 29px;
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
      }

      ion-button::part(native) {
        --border-radius: 10px;
        --padding-start: 5px;
        --padding-end: 5px;
      }
    }
  }

  .swiper-pagination-bullet-active {
    width: 15px !important;
    height: 5px !important;
    border-radius: 5px !important;
    --bullet-background-active: hsl(32deg 99% 50%);
  }
}
</style>
