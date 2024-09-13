<script setup lang="ts">
import About from "./About.vue";
import {openBubbleStore} from "../../stores/OpenBubbleStore.ts";
import {storeToRefs} from "pinia";

const store = openBubbleStore();
const { bubbleIsOpen, bubbleIsOpenOne, bubbleIsOpenTwo, bubbleIsOpenThree, bubbleIsOpenFour } = storeToRefs(store);
</script>

<template>
<div class="main-modal">
  <about v-if="bubbleIsOpenOne"></about>
</div>
</template>

<style scoped>
  .main-modal {
    width: 85rem;
    height: 59rem;
    border-radius: 1rem;
    overflow: hidden;
    background: linear-gradient(180deg, #00EC6D 0%, #001974 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: circulo1 5s linear infinite;
  }

  @keyframes circulo1 {

    0%,
    100% {
      border-radius: 84% 36% 27% 73% / 55% 58% 42% 45%;
    }

    25% {
      border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;
    }

    50% {
      border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
    }

    75% {
      border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
    }
  }
</style>