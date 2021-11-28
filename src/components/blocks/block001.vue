<template>
  <ion-list class="ion-margin-vertical block001">
    <ion-item lines="none">
      <ion-label>
        <h2>Sunwoo Jun</h2>
        <small>Lifetime earnings</small>
      </ion-label>

      <ion-text>
        <small>NT$</small>
        22.83
      </ion-text>
    </ion-item>

    <ion-item color="lime" class="child-block001" lines="none">
      <ion-text class="w-50" color="success">
        <p>Cashback Tracked!</p>
        <small class="text-muted">Purchased at foodpanda on 16 Oct 2021</small>
      </ion-text>

      <ion-text class="ms-auto width-max-content" color="success">
        <small>NT$</small>
        22.83
      </ion-text>
    </ion-item>
  </ion-list>
</template>

<script>
export default {
  name: "block001",
};
</script>

<script setup>
import { IonList, IonItem, IonLabel, IonText } from "@ionic/vue";
</script>

<style lang="scss" scoped>
ion-list.block001 {
  padding: 1rem 0.75rem;
  box-shadow: 3px 15px 20px 0px rgb(0 0 0 / 10%);
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 15px;

  p {
    margin: 0;
  }

  .text-muted {
    color: #57a752;
  }

  .child-block001 {
    background-color: #cdf5d0;
    padding: 14px 0px;
    border-radius: 15px;
  }
}
</style>
