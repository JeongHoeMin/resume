<script setup lang="ts">
import RecapCardLayout, {type IRecapCardProps} from "../layout/RecapCardLayout.vue";
import DetailCardLayout, {type IDetailCardProps} from "../layout/DetailCardLayout.vue";

interface IExperienceCardProps extends IRecapCardProps, IDetailCardProps {}

defineProps<IExperienceCardProps>()
</script>

<template>
  <div class="card">
    <RecapCardLayout
        :title="title"
        :link="link"
        :description="description"
        :period="period"
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
  margin: 0;
  padding: 0;
}

@media (max-width: 42rem) {
  .card {
    flex-direction: column;
  }
}
</style>