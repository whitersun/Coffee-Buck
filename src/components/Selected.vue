<template>
  <ion-item>
    <ion-label>Nation</ion-label>
    <ion-select v-model="optModel1" @ionChange="optChange(optModel1)">
      <ion-select-option v-for="nation in nation" :key="nation.id" :value="nation.id">
        {{ nation.name }}
      </ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item :disabled="!moduleOpts.length">
    <ion-label>Food</ion-label>
    <ion-select v-model="optModel2">
      <ion-select-option v-for="food in moduleOpts" :key="food.id" :value="food.id">
        {{ food.name }}
      </ion-select-option>
    </ion-select>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/vue";
import { ref } from "@vue/runtime-core";

export default {
  name: "SelectedComponent",
  components: { IonItem, IonLabel, IonSelect, IonSelectOption },
  setup() {
    const optModel1 = ref(3);
    const optModel2 = ref(null);
    const moduleOpts = ref([]);

    const nation = ref([
      { id: 1, name: "American" },
      { id: 2, name: "Vietnamese" },
      { id: 3, name: "Japan" },
      { id: 4, name: "Chinese" },
      { id: 5, name: "Taiwan" },
    ]);

    const food = ref([
      { id: 1, name: "Hamburger" },
      { id: 2, name: "Pho" },
      { id: 3, name: "Sushi" },
      { id: 4, name: "Mantou" },
      { id: 5, name: "Nothing" },
    ]);

    const optChange = (event) => {
      optModel1.value = event;
      optModel2.value = null;
      moduleOpts.value = food.value;
    };

    return {
      optModel1,
      optModel2,
      moduleOpts,
      nation,
      food,

      optChange,
    };
  },
};
</script>

<style lang="scss" scoped></style>
