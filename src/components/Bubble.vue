<script setup lang="ts">
  import {ref} from "vue";
  import About from "./insideComponents/About.vue";
  import {openBubbleStore} from "../stores/OpenBubbleStore.ts";
  import {storeToRefs} from "pinia";
  import Modal from "./insideComponents/Modal.vue";

  const props = defineProps({
    type: Number,
    title: String,
  });

  const store = openBubbleStore();
  const { bubbleIsOpen, bubbleIsOpenOne, bubbleIsOpenTwo, bubbleIsOpenThree, bubbleIsOpenFour } = storeToRefs(store);

  const openBubbleOne = () => {
    bubbleIsOpenOne.value = !bubbleIsOpenOne.value;
    bubbleIsOpen.value = !bubbleIsOpen.value;
  }
</script>

<template>
    <div class="circles circle1" v-if="type == 1" v-on:click="openBubbleOne" >
      <p class="circle-title">{{title}}</p>
    </div>
    <div class="circles circle2" v-if="type == 2" v-on:click="bubbleIsOpenTwo = !bubbleIsOpenTwo">
      <p class="circle-title">{{title}}</p>
    </div>
    <div class="circles circle3" v-if="type == 3" v-on:click="bubbleIsOpenThree = !bubbleIsOpenThree">
      <p class="circle-title">{{title}}</p>
    </div>
    <div class="circles circle4" v-if="type == 4" v-on:click="bubbleIsOpenFour = !bubbleIsOpenFour">
      <p class="circle-title">{{title}}</p>
    </div>
</template>

<style>
.circles {
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(180deg, #00EC6D 0%, #001974 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.circle1 {
    width: 13rem;
    height: 13rem;
    animation: circulo1 5s linear infinite;
    z-index: 1;
}

.circle1.active {
  animation: circleOpen 0.3s linear forwards;
}

.circle2 {
    width: 18.75rem;
    height: 18.75rem;
    animation: circulo2 5s linear infinite;
    z-index: 1;
}

.circle3 {
    width: 25rem;
    height: 25rem;
    animation: circulo3 5s linear infinite;
    z-index: 1;
}

.circle4 {
  width: 31.25rem;
  height: 31.25rem;
  animation: circulo4 5s linear infinite;
  z-index: 1;
}

.circle-title {
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;

  text-align: center;

  color: var(--primary-color);
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

@keyframes circulo2 {

    0%,
    100% {
        border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;

    }

    25% {
        border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;

    }

    50% {
        border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
    }

    75% {
        border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
    }
}

@keyframes circulo3 {

    0%,
    100% {
        border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
    }

    25% {
        border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
    }

    50% {
        border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;
    }

    75% {
        border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;
    }
}

@keyframes circulo4 {

  0%,
  100% {
    border-radius: 84% 36% 27% 73% / 55% 58% 42% 45%;
  }

  25% {
    border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
  }

  50% {
    border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
  }

  75% {
    border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
  }
}

@keyframes circleOpen {
  0% {
    width: 13rem;
    height: 13rem;
    border-radius: 1rem;
  }

  100% {
    width: 65rem;
    height: 39rem;
    border-radius: 1rem;
  }
}
</style>