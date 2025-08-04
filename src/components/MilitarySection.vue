<script setup lang="ts">
import CardLayout from "../layout/CardLayout.vue";
import RecapCardLayout from "../layout/RecapCardLayout.vue";
import DetailCardLayout from "../layout/DetailCardLayout.vue";
import {onBeforeMount, ref} from "vue";
import {getMilitary} from "../service/military.service.ts";

const military = ref<string>('');

onBeforeMount(() => {
  military.value = getMilitary();
})
</script>

<template>
  <card-layout header="병역사항">
    <div class="card">
      <DetailCardLayout summary="" :body="military" />
    </div>
  </card-layout>
</template>

<style scoped>
.card {
  width: 100%;
  display: flex;
  margin: 3.5rem 0 0;
  padding: 0;
}

@media (max-width: 42rem) {
  .card {
    flex-direction: column;
  }
}
</style>