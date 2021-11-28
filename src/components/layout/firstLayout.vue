<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonContent,
  IonSegment,
  IonSegmentButton,
} from "@ionic/vue";
import { firstContentScrollLayout, segmentFunction } from "../../functions/scroll";

export default {
  name: "FirstLayout",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonContent,
  },
  props: {
    addHeaderClass: { type: String, required: false, default: "" },
    addHeaderStyle: { type: String, required: false, default: "" },
    addHeaderToolbarClass: { type: String, required: false, default: "" },
    addHeaderToolbarStyle: { type: String, required: false, default: "" },
    booleanToolbarTranslucent: { type: Boolean, default: false },
    addHeaderTitleClass: { type: String, required: false, default: "" },
    headerTitleSize: { type: String, required: false, default: "" },
    addContentClass: { type: String, required: false, default: "" },
    contentTitleSize: { type: String, required: false, default: "" },
    headerTitle: { type: String, required: false, default: "" },
    devMode: { type: String, required: false, default: "" },
  },

  setup() {
    const { firstContentScroll } = firstContentScrollLayout();
    const { changeSegment, segmentChanged } = segmentFunction();

    return {
      firstContentScroll,
      changeSegment,
      segmentChanged,
    };
  },
};
</script>

<template>
  <ion-page :mode="devMode">
    <ion-header ref="firstLayoutScroll" :class="addHeaderClass" :style="addHeaderStyle">
      <ion-toolbar
        :class="addHeaderToolbarClass"
        :style="addHeaderToolbarStyle"
        :translucent="booleanToolbarTranslucent"
      >
        <ion-title mode="md" :size="headerTitleSize" :class="addHeaderTitleClass">
          {{ headerTitle }}
        </ion-title>
      </ion-toolbar>

      <ion-toolbar>
        <ion-segment
          v-model="changeSegment"
          mode="md"
          @ionChange="segmentChanged($event)"
        >
          <ion-segment-button value="0">
            <ion-label>Pizza</ion-label>
          </ion-segment-button>
          <ion-segment-button value="1">
            <ion-label>Pasta</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>

    <ion-content
      :force-overscroll="true"
      :class="addContentClass"
      :scroll-events="true"
      fullscreen="true"
      @ionScroll="firstContentScroll($event)"
    >
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title mode="md" :size="contentTitleSize">
            {{ headerTitle }}
          </ion-title>
        </ion-toolbar>

        <ion-toolbar>
          <ion-segment mode="md" value="pizza" @ionChange="segmentChanged($event)">
            <ion-segment-button value="0">
              <ion-label>Pizza</ion-label>
            </ion-segment-button>
            <ion-segment-button value="1">
              <ion-label>Pasta</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-toolbar>
      </ion-header>

      <slot />
    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped></style>
