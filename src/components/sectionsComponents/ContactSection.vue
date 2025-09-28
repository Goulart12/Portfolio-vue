<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const developer = {
  email: "juarezgoulartdev@gmail.com",
  linkedin: "https://www.linkedin.com/in/juarez-goulart12",
  github: "https://github.com/Goulart12",
};
</script>

<template>
  <section id="contact" class="py-20 px-6 text-white w-screen">
    <div class="container mx-auto max-w-3xl text-center">
      <h2 class="text-4xl font-bold mb-6 relative pb-4">
        Entre em Contato
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-(--secondary-color) rounded-full"
        ></span>
      </h2>
      <p class="text-lg mb-8 opacity-90">
        Se você tem um projeto em mente ou apenas quer bater um papo, sinta-se à
        vontade para me enviar uma mensagem!
      </p>
      <div class="flex flex-col items-center space-y-4">
        <a
          :href="`mailto:${developer.email}`"
          class="flex items-center bg-white text-(--primary-color) px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon="fas fa-envelope" class="mr-3" />
          {{ developer.email }}
        </a>
        <a
          :href="developer.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center bg-white text-(--primary-color) px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon="fab fa-linkedin" class="mr-3" /> LinkedIn
        </a>
        <a
          :href="developer.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center bg-white text-(--primary-color) px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon="fab fa-github" class="mr-3" /> GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<style>
@import "tailwindcss";
</style>
