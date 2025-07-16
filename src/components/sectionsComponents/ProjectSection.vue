<script setup lang="ts">
import { ref } from "vue";
import CartShoppingIcon from "../../assets/icons/cart-shopping-list.svg";
import CashMoneyIcon from "../../assets/icons/cash-money.svg";
import SecretFriendIcon from "../../assets/icons/friend.svg";

const projects = ref([
  {
    title: "Lista de Compras API",
    description:
      "API RESTful para gerenciamento de uma lista de compras, com funcionalidades de criação, edição e exclusão de itens.",
    technologies: [".Net", "Docker", "PostgreSQL", "Redis", "JWT", "Swagger"],
    link: "https://github.com/Goulart12/ShopList_API",
    image: CartShoppingIcon,
  },
  {
    title: "Desafio técnico Money Transaction",
    description:
      "Aplicativo web responsivo para gerenciamento de tarefas, com funcionalidades de criação, edição e exclusão.",
    technologies: [
      ".Net",
      "Docker",
      "PostgreSQL",
      "Redis",
      "JWT",
      "BCrypt.Net",
      "Swagger",
      "Dapper",
    ],
    link: "https://github.com/Goulart12/MoneyTransactionTechChallenge",
    image: CashMoneyIcon,
  },
  {
    title: "Amigo Oculto API",
    description:
      "Construção de uma API RESTful para consumir dados de previsão do tempo e disponibilizá-los para aplicações front-end.",
    technologies: ["Java", "SpringBoot", "Spring Data JPA", "PostgreSQL"],
    link: "https://github.com/Goulart12/AmigoOculto_API",
    image: SecretFriendIcon,
  },
]);

function onImageErrorProject(event) {
  event.target.src = "https://placehold.co/400x250/dddddd/000000?text=Projeto"; // Fallback for project images
}
</script>

<template>
  <section
    id="projects"
    class="py-20 px-6 bg-(--primary-color) shadow-inner w-screen"
  >
    <div class="container mx-auto max-w-6xl text-center">
      <h2 class="text-4xl font-bold text-(--light-color) mb-12 relative pb-4">
        Meus Projetos
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-(--secondary-color) rounded-full"
        ></span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white rounded-xl shadow-lg overflow-hidden border-none hover:shadow-2xl transition duration-300 flex flex-col h-full"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover object-center"
            @error="onImageErrorProject"
          />
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-bold text-(--primary-color) mb-3">
              {{ project.title }}
            </h3>
            <p class="text-(--primary-color) mb-4 flex-grow">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, i) in project.technologies"
                :key="i"
                class="bg-(--secondary-color) text-(--primary-color) text-sm font-medium px-3 py-1 rounded-full"
              >
                {{ tech }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-(--primary-color) text-white px-6 py-2 rounded-full font-semibold hover:bg-(--secondary-color) transition duration-300 self-start"
            >
              Ver Projeto
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import "tailwindcss";
</style>
