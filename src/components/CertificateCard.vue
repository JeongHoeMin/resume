<script setup lang="ts">
import RecapCardLayout, {type IRecapCardProps} from "../layout/RecapCardLayout.vue";

export interface ICertificateCardProps extends IRecapCardProps {}

defineProps<ICertificateCardProps>();
</script>

<template>
  <div class="card">
    <RecapCardLayout class="title" :title="title" :period="period" :description="description" />
  </div>
</template>

<style scoped>
.card {
  width: auto;
}
</style>