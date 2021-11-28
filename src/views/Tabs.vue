<template>
  <ion-tabs>
    <ion-router-outlet />
    <ion-tab-bar color="white" slot="bottom" class="tabs-layout">
      <ion-tab-button tab="tab1" href="/tabs/tab1">
        <ion-icon size="medium" :icon="homeOutline" />
      </ion-tab-button>

      <ion-tab-button tab="tab2" href="/tabs/tab2">
        <ion-icon size="medium" :icon="bagHandleOutline" />
      </ion-tab-button>

      <ion-tab-button tab="tab3" href="/tabs/tab3">
        <ion-icon size="medium" :icon="heartOutline" />
      </ion-tab-button>

      <ion-tab-button tab="tab4" href="/tabs/tab4">
        <ion-icon size="medium" :icon="notificationsOutline" />
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonRouterOutlet } from "@ionic/vue";
import {
  homeOutline,
  bagHandleOutline,
  heartOutline,
  notificationsOutline,
} from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "VueMainTabs",
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonRouterOutlet,
  },
  setup() {
    return {
      heartOutline,
      homeOutline,
      notificationsOutline,
      bagHandleOutline,
    };
  },
});
</script>
