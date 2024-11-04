<script setup lang="ts">
import MenuHamburguer from "../components/BurgerMenu.vue";
import NameLogo from "../components/LogoName.vue";
import InitialButton from "../components/InitialButton.vue";
import Bubble from "../components/Bubble.vue";
import Waves from "../components/Waves.vue";
import { ref } from "vue";
import Modal from "../components/insideComponents/Modal.vue";
import {openBubbleStore} from "../stores/OpenBubbleStore.ts";
import {storeToRefs} from "pinia";
import About from "../components/insideComponents/About.vue";

const wavesUp = ref(false);

const elevateWaves = () => {
    wavesUp.value = true;
}

const store = openBubbleStore();
const { bubbleIsOpen, bubbleIsOpenOne, bubbleIsOpenTwo, bubbleIsOpenThree, bubbleIsOpenFour } = storeToRefs(store);
</script>

<template>
    <div class="intro-container">
        <NameLogo />

        <InitialButton :value="elevateWaves" :waves="wavesUp" />

        <Waves :valueWave="wavesUp" />
    </div>
    <div class="main-container" id="main">
       <about v-if="!bubbleIsOpen"></about>

        <div class="main-bubbles" v-if="!bubbleIsOpen">
          <bubble title="Projeto" type="1"></bubble>
          <bubble title="Projeto" type="2"></bubble>
          <bubble title="Projeto" type="3"></bubble>
          <bubble title="Projeto" type="4"></bubble>
        </div>


        <modal v-if="bubbleIsOpen"></modal>

    </div>

</template>

<style>
.intro-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.main-container {
  max-width:100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-self: center;
  background: var(--primary-color);
}

.main-projects-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-bubbles {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  //align-items: center;
  //justify-content: center;
  //justify-self: center;
  grid-gap: 3.125rem;
  //padding: 10rem;
}

.v-enter-active {
  transition: opacity 0.8s ease;
}

.v-leave-active {
  transition: opacity 0s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (max-width: 800px) {
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
  }

  .main-bubbles {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }
}
</style>