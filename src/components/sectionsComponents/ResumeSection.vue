<script setup lang="ts">
import { ref } from "vue";

const resume = ref([
  {
    period: "2021 - Present",
    role: "Full Stack Developer Jr.",
    company: "Helps-On",
    description:
      "Contributed to the development of a service-oriented application, focusing on building the API using C#. Utilized RavenDB, Redis, and RabbitMQ for data persistence, caching, and messaging, respectively. Implemented key features such as user punishment and ban systems, profile management, and customer/partner reviews. Also worked on multilingual email and notification systems. Additionally, participated in the development of the Web/PWA application using TypeScript, Vue.js, and Tailwind CSS.",
  },
  {
    period: "2020 - 2024",
    role: "Bachelor's Degree in Computer Science",
    company: "Universidade Estácio de Sá",
    description:
      "Focus on algorithms, programming languages, data structures, operating systems, computer networks, artificial intelligence, databases and software engineering.",
  },
  {
    period: "2015 - 2018",
    role: "Industrial Automation Technician Training",
    company: "Insituto Federal do Rio de Janeiro",
    description:
      "Focus on PLC and Arduino programming, industrial process automation and systems control.",
  },
]);
</script>

<template>
  <section id="resume" class="py-20 px-6 bg-gray-50 w-screen">
    <div class="container mx-auto max-w-4xl text-center">
      <h2 class="text-4xl font-bold text-(--primary-color) mb-12 relative pb-4">
        Experience & Education
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-(--secondary-color) rounded-full"
        ></span>
      </h2>
      <div class="relative border-l-2 border-(--secondary-color) pl-8 ml-4">
        <div
          v-for="(item, index) in resume"
          :key="index"
          class="mb-10 text-left"
        >
          <div
            class="absolute w-4 h-4 bg-(--secondary-color) rounded-full -left-2 top-0 mt-1"
          ></div>
          <p class="text-sm text-gray-500 font-medium mb-1">
            {{ item.period }}
          </p>
          <h3 class="text-xl font-bold text-(--primary-color) mb-1">
            {{ item.role }}
          </h3>
          <p class="text-lg text-(--secondary-color) font-semibold mb-2">
            {{ item.company }}
          </p>
          <p class="text-gray-700 leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import "tailwindcss";
</style>
