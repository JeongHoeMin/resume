<script setup lang="ts">

</script>

<template>
  <div class="frame">
    <i class="profile-img"></i>
  </div>
</template>

<style scoped>
.frame {
  scale: 1.1;
  width: 10rem; /* 원하는 크기로 조절 */
  height: 10rem;
  border-radius: 50%; /* 동그랗게 만듦 */
  overflow: hidden; /* 사진이 틀 밖으로 나가지 않도록 */
  box-shadow: 0 0 1rem rgba(0,0,0,0.8); /* 약간의 그림자 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white; /* 액자 배경 */

  .profile-img {
    background-image: url("../assets/hoeminJ.jpg");
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: contain;
    scale: 1.5;
    background-position: 16px 6px;
  }
}
</style>