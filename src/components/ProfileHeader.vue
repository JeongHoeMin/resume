<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { getEmail, getGithubLink, getName, getPosition } from "../service/profile.service.ts";

const name = ref<string>('')
const position = ref<string>('')
const email = ref<string>('')
const githubLink = ref<string>('')

onBeforeMount(() => {
  name.value = getName();
  position.value = getPosition();
  email.value = getEmail();
  githubLink.value = getGithubLink();

})
</script>

<template>
  <div class="profile-header">
    <div class="header-left">
      <h2 class="my-name">{{name}}</h2>
      <p class="my-position">{{ position }}</p>
    </div>
    <div class="header-right">
      <div class="my-link">
        <a :href="githubLink" target="_blank"><i class="link-ico git-hub"></i></a>
      </div>
      <p class="email">Email: <a :href="`mailto:${email}`" target="_blank">{{email}}</a></p>
    </div>
  </div>
</template>

<style scoped>
.profile-header {
  display: flex;
  padding: 3rem 1rem 1rem;
  .header-left {
    flex-grow: 1;
    text-align: left;
    .my-name {
      font-size: 2.5rem;
      margin: 0;
    }
    .my-position {
      margin: 0;
      font-size: 1.2rem;
      color: var(--cr-gray07);
    }
  }

  .header-right {
    display: flex;
    flex-direction: column;
    text-align: right;
    .my-link {
      height: 4rem;
      display: flex;
      justify-content: right;
      gap: 1rem;
      .link-ico {
        display: block;
        width: 4rem;
        height: 4rem;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        &:hover {
          filter: invert(.5);
        }
      }
      .git-hub {
        background-image: url("../assets/git-hub.svg");
      }
    }

    .email {
      a {
        color: black;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
        font-weight: bold;
      }
    }
  }
}
@media (max-width: 42rem) {
  .profile-header {
    flex-direction: column;
    width: 100%;
    height: auto;
    * {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
}
</style>