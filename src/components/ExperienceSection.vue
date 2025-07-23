<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import ExperienceCard, {type IExperienceCardProps} from "./ExperienceCard.vue";
import {getExperienceList} from "../service/experience.service.ts";
import CardLayout from "../layout/CardLayout.vue";

const experienceList = ref<IExperienceCardProps[]>();

onBeforeMount(() => {
  experienceList.value = getExperienceList();
})
</script>

<template>
  <card-layout header="경력">
    <ExperienceCard
        v-for="({title, link, description, period, summary, body}, idx) in experienceList"
        :key="idx"
        :title="title"
        :link="link"
        :description="description"
        :period="period"
        :summary="summary"
        :body="body"
    />
  </card-layout>
</template>

<style scoped>
</style>