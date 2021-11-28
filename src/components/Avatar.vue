<template>
  <ion-avatar slot="end" class="ion-padding-end">
    <img :src="avatar" :style="avatarSize" />
  </ion-avatar>
</template>

<script lang="ts">
import { IonAvatar } from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "AvatarComponent",
  components: {
    IonAvatar,
  },
});
</script>

<script setup>
const avatarSize = "width: 100%; height: auto;";
const avatar =
  "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
</script>

<style lang="scss" scoped></style>
