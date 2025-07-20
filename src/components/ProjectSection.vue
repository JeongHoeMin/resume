<script setup lang="ts">
import CardLayout from "../layout/CardLayout.vue";
import ProjectCard, {type IProjectCardProps} from "./ProjectCard.vue";
import {onBeforeMount, ref} from "vue";
import {getProjectList} from "../service/project.service.ts";

const projectList = ref<IProjectCardProps[]>();

onBeforeMount(() => {
  projectList.value = getProjectList();
})
</script>

<template>
  <card-layout header="프로젝트">
    <ProjectCard
        v-for="({title, description, link, period, summary, body}, idx) in projectList"
        :key="idx"
        :title="title"
        :description="description"
        :link="link"
        :period="period"
        :summary="summary"
        :body="body"
    />
  </card-layout>
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