<script setup lang="ts">
import CardLayout from "../layout/CardLayout.vue";
import RecapCardLayout from "../layout/RecapCardLayout.vue";
import DetailCardLayout from "../layout/DetailCardLayout.vue";
import ProfileImage from "./ProfileImage.vue";
import {onBeforeMount, ref} from "vue";
import {getAboutMe} from "../service/about-me.service.ts";

const aboutMe = ref<string>('');

onBeforeMount(() => {
  aboutMe.value = getAboutMe();
})
</script>

<template>
  <card-layout header="나를 소개합니다">
    <div class="card">
      <recap-card-layout>
        <ProfileImage />
      </recap-card-layout>
      <DetailCardLayout summary="" :body="aboutMe" />
    </div>
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