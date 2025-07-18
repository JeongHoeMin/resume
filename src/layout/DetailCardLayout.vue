<script setup lang="ts">
defineProps<{
  summary: string;
  body: Array<string>;
}>();
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
  min-width: 20rem;
  margin-inline: 1rem;
  .text {
    margin: 0;
    text-align: start;
    font-size: 0.97rem;
  }
}
</style>