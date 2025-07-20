<script setup lang="ts">
import DetailCardLayout, {type IDetailCardProps} from "../layout/DetailCardLayout.vue";
import RecapCardLayout, {type IRecapCardProps} from "../layout/RecapCardLayout.vue";

export interface ISkillCardProps extends IRecapCardProps, IDetailCardProps {}

defineProps<ISkillCardProps>();
</script>

<template>
  <div class="card">
    <RecapCardLayout
        :title="title"
    />
    <DetailCardLayout
        :body="body"
    />
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  display: flex;
  margin: 1rem 0 0;
  padding: 0;
}

@media (max-width: 42rem) {
  .card {
    flex-direction: column;
  }
}
</style>