<script setup lang="ts">
import { ref } from "vue";

const resume = ref([
  {
    period: "2021 - Presente",
    role: "Desenvolvedor Full Stack Jr",
    company: "Helps-On",
    description:
      "Participei do desenvolvimento de uma aplicação de serviços, atuando na criação da API em C#, com utilização de RavenDB, Redis e RabbitMQ para persistência de dados, cache e mensageria. Contribuí com a implementação de funcionalidades como sistema de punições e banimentos de usuários, gestão de perfil e avaliações de clientes e parceiros, além do envio de e-mails e notificações multilíngues. Também participei da construção da aplicação Web/PWA utilizando TypeScript, Vue.js e Tailwind CSS.",
  },
  {
    period: "2020 - 2024",
    role: "Bacharel em Ciência da Computação",
    company: "Universidade Estácio de Sá",
    description:
      "Foco em áreas como algoritmos, linguagens de programação, estruturas de dados, sistemas operacionais, redes de computadores, inteligência artificial, banco de dados e engenharia de software.",
  },
  {
    period: "2015 - 2018",
    role: "Curso Técnico em Automação Industrial",
    company: "Insituto Federal do Rio de Janeiro",
    description:
      "Foco em programação de CLPs e Arduínos, automação de processos industriais e controle de sistemas.",
  },
]);
</script>

<template>
  <section id="resume" class="py-20 px-6 bg-gray-50 w-screen">
    <div class="container mx-auto max-w-4xl text-center">
      <h2 class="text-4xl font-bold text-(--primary-color) mb-12 relative pb-4">
        Experiência & Educação
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
