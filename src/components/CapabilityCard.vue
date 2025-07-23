<script setup lang="ts">
import RecapCardLayout, {type IRecapCardProps} from "../layout/RecapCardLayout.vue";
import DetailCardLayout, {type IDetailCardProps} from "../layout/DetailCardLayout.vue";

export interface ICapabilityCardProps extends IRecapCardProps, IDetailCardProps {}

defineProps<ICapabilityCardProps>();
</script>

<template>
  <div class="card">
    <RecapCardLayout class="title" :title="title" />
    <DetailCardLayout :body="body" />
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 0 0;
  .title {
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>