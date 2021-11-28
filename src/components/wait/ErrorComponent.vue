<template>
  <div class="error-component">Oop! Error occurred...</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "ErrorComponent",
});
</script>

<style lang="scss" scoped>
.error-component {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
