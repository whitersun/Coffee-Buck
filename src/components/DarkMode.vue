<template>
  <ion-list>
    <ion-item lines="full">
      <ion-icon slot="start" :icon="moon"></ion-icon>
      <ion-label>Dark Theme </ion-label>

      <ion-toggle @ionChange="darkMode($event)"> </ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { IonList, IonItem, IonLabel, IonToggle, IonIcon } from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import { moon } from "ionicons/icons";

export default defineComponent({
  name: "DarkModeComponent",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonIcon,
  },
});
</script>

<script lang="ts" setup>
const darkMode = (event: any) => {
  document.body.classList.toggle("dark", event.detail.checked);
};
</script>

<style lang="scss" scoped></style>
