<template>
  <ion-list>
    <ion-item lines="full">
      <ion-icon slot="start" :icon="moon"></ion-icon>
      <ion-label>Dark Theme </ion-label>

      <ion-toggle @ionChange="darkMode($event)"> </ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonList, IonItem, IonLabel, IonToggle, IonIcon } from "@ionic/vue";
import { moon } from "ionicons/icons";

export default {
  name: "DarkModeComponent",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonIcon,
  },
};
</script>

<script setup>
const darkMode = (event) => {
  document.body.classList.toggle("dark", event.detail.checked);
};
</script>

<style lang="scss" scoped></style>
