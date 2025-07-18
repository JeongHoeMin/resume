<script setup lang="ts">
export interface IDetailCardProps {
  summary: string;
  body: Array<string>;
}

defineProps<IDetailCardProps>();
</script>

<template>
  <div class="detail-card">
    <p class="summary caption">{{ summary }}</p>
    <ul>
      <li v-for="text of body">
        <p class="text">{{ text }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.detail-card {
  min-width: 23rem;
  margin-inline: 1rem;
  .text {
    margin: 0;
    text-align: start;
    font-size: 0.97rem;
  }
}
</style>