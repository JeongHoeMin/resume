<script setup lang="ts">
import CardLayout from "../layout/CardLayout.vue";
import {onBeforeMount, ref} from "vue";
import CapabilityCard, {type ICapabilityCardProps} from "./CapabilityCard.vue";
import {getCapabilityList} from "../service/capability.service.ts";

const capabilityList = ref<ICapabilityCardProps[]>();

onBeforeMount(() => {
  capabilityList.value = getCapabilityList();
})
</script>

<template>
  <card-layout header="역량">
    <CapabilityCard
        v-for="({title, body}, idx) in capabilityList"
        :key="idx"
        :title="title"
        :body="body"
    />
  </card-layout>
</template>

<style scoped>

</style>