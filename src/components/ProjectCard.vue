<script setup lang="ts">
import RecapCardLayout, {type IRecapCardProps} from "../layout/RecapCardLayout.vue";
import DetailCardLayout, {type IDetailCardProps} from "../layout/DetailCardLayout.vue";

export interface IProjectCardProps extends IRecapCardProps, IDetailCardProps {}

defineProps<IProjectCardProps>()
</script>

<template>
  <div class="card">
    <RecapCardLayout
        :title="title"
        :period="period"
        :description="description"
        :link="link"
    />
    <DetailCardLayout
        :summary="summary"
        :body="body"
    />
  </div>
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