<template>
  <h1
    class="ion-text-capitalize ion-padding-horizontal ion-padding-top"
    style="line-height: 1.5"
  >
    The Beauty Sweet <br />
    Of Coffee Daily
  </h1>

  <ion-img
    class="img-fluid ion-padding block003-img-class"
    :src="bannerImage.image"
    :alt="bannerImage.name"
    :style="imageCustomClass"
  ></ion-img>
</template>

<script>
import { IonImg } from "@ionic/vue";
import { reactive } from "@vue/reactivity";

export default {
  name: "Block003",

  components: { IonImg },
};
</script>

<script setup>
const bigImage =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80";

const imageCustomClass =
  "width: 100%; height: 20rem; border-radius: 10px; object-fit: cover; object-position: center";

const bannerImage = reactive({
  name: "Coffee is the things in the world!",
  image: bigImage,
});
</script>

<style lang="scss" scoped>
ion-img.block003-img-class::part(image) {
  border-radius: 10px;
}
</style>
