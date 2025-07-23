<script setup lang="ts">

import CertificateCard, {type ICertificateCardProps} from "./CertificateCard.vue";
import CardLayout from "../layout/CardLayout.vue";
import {onBeforeMount, ref} from "vue";
import {getCertificateList} from "../service/certificate.service.ts";

const certificateList = ref<ICertificateCardProps[]>();

onBeforeMount(() => {
  certificateList.value = getCertificateList();
})
</script>

<template>
  <card-layout header="자격증">
    <div class="card-section">
    <CertificateCard
        v-for="({title, period, description}, idx) in certificateList"
        :key="idx"
        :title="title"
        :period="period"
        :description="description"
    />
    </div>
  </card-layout>
</template>

<style scoped>
.card-section {
  display: flex;
}
@media (max-width: 42rem) {
  .card-section {
    flex-direction: column;
  }
}
</style>