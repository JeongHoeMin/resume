<script setup lang="ts">

import CardLayout from "../layout/CardLayout.vue";
import SkillCard, {type ISkillCardProps} from "./SkillCard.vue";
import {onBeforeMount, ref} from "vue";
import {getSkillList} from "../service/skill.service.ts";

const skillList = ref<ISkillCardProps[]>();

onBeforeMount(() => {
  skillList.value = getSkillList();
})
</script>

<template>
  <card-layout header="기술 스택" hint="지금까지 배포해본 서비스들에서 사용했던 기술들입니다.">
    <SkillCard
        v-for="({title, body}, idx) in skillList"
        :key="idx"
        :title="title"
        :body="body"
    />
  </card-layout>
</template>

<style scoped>

</style>