<script setup lang="ts">
import MenuHamburguer from "../components/BurgerMenu.vue";
import NameLogo from "../components/LogoName.vue";
import InitialButton from "../components/InitialButton.vue";
import Bubble from "../components/Bubble.vue";
import Waves from "../components/Waves.vue";
import { ref } from "vue";

const wavesUp = ref(false);

const elevateWaves = () => {
    wavesUp.value = true;
}
</script>

<template>
    <div class="intro-container">
        <NameLogo />

        <InitialButton :value="elevateWaves" :waves="wavesUp" />

        <Waves :valueWave="wavesUp" />
    </div>
    <div class="main-container">
        <bubble type="1" title="SOBRE MIM"/>
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
  width: 100vw;
  height: 100%;

  background: var(--primary-color);
}
</style>