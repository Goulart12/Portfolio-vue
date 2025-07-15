<script setup lang="ts">
import MenuHamburguer from "../components/BurgerMenu.vue";
import NameLogo from "../components/LogoName.vue";
import InitialButton from "../components/InitialButton.vue";
import Bubble from "../components/Bubble.vue";
import Waves from "../components/Waves.vue";
import { ref } from "vue";
import Modal from "../components/insideComponents/Modal.vue";
import { openBubbleStore } from "../stores/OpenBubbleStore.ts";
import { storeToRefs } from "pinia";
import About from "../components/insideComponents/About.vue";
import AboutSection from "../components/sectionsComponents/AboutSection.vue";
import SkillsSection from "../components/sectionsComponents/SkillsSection.vue";
import ProjectSection from "../components/sectionsComponents/ProjectSection.vue";
import ResumeSection from "../components/sectionsComponents/ResumeSection.vue";
import ContactSection from "../components/sectionsComponents/ContactSection.vue";

const wavesUp = ref(false);

const elevateWaves = () => {
  wavesUp.value = true;
};

const store = openBubbleStore();
const {
  bubbleIsOpen,
  bubbleIsOpenOne,
  bubbleIsOpenTwo,
  bubbleIsOpenThree,
  bubbleIsOpenFour,
} = storeToRefs(store);
</script>

<template>
  <div class="intro-container">
    <NameLogo />

    <InitialButton :value="elevateWaves" :waves="wavesUp" />

    <Waves :valueWave="wavesUp" />
  </div>
  <div
    class="min-h-screen w-screen bg-(--primary-color) antialiased flex flex-col items-center"
  >
    <AboutSection></AboutSection>
    <SkillsSection></SkillsSection>
    <ProjectSection></ProjectSection>
    <ResumeSection></ResumeSection>
    <ContactSection></ContactSection>
  </div>

  <footer class="bg-(--primary-color) text-white py-4 px-6 text-center">
    <div class="container mx-auto">
      <p class="text-lg">
        &copy; {{ new Date().getFullYear() }} Juarez Goulart. Todos os direitos
        reservados.
      </p>
    </div>
  </footer>
</template>

<style>
@import "tailwindcss";

.intro-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Custom scrollbar for a modern look */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #e2e8f0; /* Slate 200 */
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #94a3b8; /* Slate 400 */
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #64748b; /* Slate 500 */
}
/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

/*.main-container {
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  background: var(--primary-color);
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
}*/

@media (max-width: 800px) {
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
  }
}
</style>
