<script setup lang="ts">
import dayjs from "dayjs";
import {computed} from "vue";

export interface IRecapCardProps {
  title?: string;
  link?: string;
  description?: string;
  period?: [Date | null | string, Date | null | string];
}

const props = defineProps<IRecapCardProps>();

const periodStart = computed<Date | null | string>(() => props.period ? props.period[0] : null);
const periodEnd = computed<Date | null | string>(() => props.period ? props.period[1] : null);

const dateToString = (date: Date | null | string) => {
  if (date === null) return null;
  else if (date instanceof Date) return dayjs(date).format('YYYY.MM')
  else return date;
};
</script>

<template>
  <div class="recap-card">
    <slot name="default">
      <h2 class="title">{{ title }}</h2>
      <a class="caption link" :href="link">{{link}}</a>
      <p class="description">{{description}}</p>
      <p class="period">{{dateToString(periodStart)}} ~ {{dateToString(periodEnd)}}</p>
    </slot>
  </div>
</template>

<style scoped>
.recap-card {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  justify-content: start;
  width: 15rem;
  height: 10rem;
  padding: 1rem 0;
  margin-inline: 1rem;

  h2,
  p {
    margin: 0;
    font-size: 1rem;
  }

  .title {
    font-size: 1.4rem;
  }
  .link {
    &:hover {
      text-decoration: underline;
    }
  }
  .description {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .period {
    color: var(--cr-gray08);
    font-size: 0.93rem
  }
}

@media (max-width: 42rem) {
  .recap-card {
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>