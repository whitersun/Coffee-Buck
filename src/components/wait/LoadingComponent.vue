<template>
  <div class="loading-component">Loading...</div>
</template>

<script lang="ts">
export default {
  name: "LoadingComponent",
};
</script>

<style lang="scss" scoped>
.loading-component {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
