<script setup lang="ts">
defineProps<{
  header: string;
  hint?: string;
}>()
</script>

<template>
  <div class="section">
    <h2 class="header">
      <slot name="header">{{ header }}</slot>
    </h2>
    <p class="hint">
      <slot name="hint">{{ hint }}</slot>
    </p>
    <slot name="default" />
  </div>
</template>

<style scoped>
.section {
  .header {
    font-weight: normal;
    font-size: 2.2rem;
    margin-inline: 1rem;
    margin-bottom: 0;
    padding-bottom: 1rem;
    border-bottom: dashed 2px var(--cr-gray04);
  }
  .hint {
    margin: 1rem 0 0;
    font-style: italic;
    font-size: 0.94rem;
    color: var(--cr-gray09);
  }
}

@media (max-width: 42rem) {
  .section {
    width: 100%;
  }
}
</style>