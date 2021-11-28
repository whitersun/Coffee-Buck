<template>
  <ion-page>
    <ion-header class="ion-header ion-no-border" mode="ios" :translucent="true">
      <ion-toolbar color="transparent">
        <ion-fab-button
          size="small"
          class="ion-margin-start homepage-fab-button"
          :translucent="true"
        >
          <ion-icon size="small" :icon="gridOutline"></ion-icon>
        </ion-fab-button>

        <ion-avatar
          class="ion-avatar ion-margin-end homepage-avatar"
          slot="end"
          @click="profile()"
        >
          <img :src="imgAvatar" alt="" />
        </ion-avatar>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <h1 class="ion-padding-horizontal ion-padding-top lh-15 fs-title">
        Find the best <br />
        coffee for you
      </h1>

      <ion-searchbar
        mode="ios"
        type="decimal"
        inputmode="decimal"
        class="ion-padding-horizontal"
        placeholder="Find your coffee..."
        :debounce="250"
        @ionChange="onSearchChange($event.detail.value)"
      ></ion-searchbar>

      <ion-toolbar color="transparent" class="homepageSegment">
        <ion-segment
          mode="md"
          scrollable
          class="ion-padding-start"
          v-model="defaultCategories"
          :swipe-gesture="true"
          @ionChange="segmentChanged($event)"
        >
          <template v-for="(category, i) in categories" :key="i">
            <ion-segment-button :value="category.name">
              <ion-label>{{ category.name }}</ion-label>
            </ion-segment-button>
          </template>
        </ion-segment>
      </ion-toolbar>

      <template v-for="(category, i) in categories" :key="i">
        <block-005
          v-if="defaultCategories === category.name"
          :listItem="listCard"
          :listCategory="category.name"
        />
      </template>

      <block-002 />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonIcon,
  IonLabel,
  IonAvatar,
  IonHeader,
  IonSegment,
  IonToolbar,
  IonContent,
  IonFabButton,
  IonSearchbar,
  IonSegmentButton,
} from "@ionic/vue";
import { gridOutline } from "ionicons/icons";
import { defineComponent } from "vue";
import { defineAsyncComponent, AsyncComponentOptions } from "@vue/runtime-core";
import { hookDataFromHomePage } from "../hook/index";
// import Block002 from '../components/blocks/block002.vue';

import LoadingComponent from "../components/wait/LoadingComponent.vue";
import ErrorComponent from "../components/wait/ErrorComponent.vue";

const configBlock005: AsyncComponentOptions = {
  loader: () => import("../components/blocks/block005.vue"),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 300,
  timeout: 3000,
};

const Block005 = defineAsyncComponent(configBlock005);

const configBlock002: AsyncComponentOptions = {
  loader: () => import("../components/blocks/block002.vue"),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 300,
  timeout: 1500,
};

const Block002 = defineAsyncComponent(configBlock002);

export default defineComponent({
  name: "VuePageTab1",
  components: {
    IonPage,
    IonIcon,
    IonLabel,
    Block005,
    Block002,
    IonAvatar,
    IonHeader,
    IonToolbar,
    IonContent,
    IonSegment,
    IonSearchbar,
    IonFabButton,
    IonSegmentButton,

    // Avatar,
  },

  setup() {
    const {
      profile,
      listCard,
      imgAvatar,
      categories,
      onSearchChange,
      segmentChanged,
      defaultCategories,
    } = hookDataFromHomePage();

    return {
      profile,
      listCard,
      imgAvatar,
      categories,
      gridOutline,
      segmentChanged,
      onSearchChange,
      defaultCategories,
    };
  },
});
</script>

<style lang="scss" scoped>
ion-avatar.homepage-avatar {
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    border: 1px solid;
    border-radius: 35%;
  }
}
</style>
