<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import CartShoppingIcon from "../../assets/icons/list.svg";
import CashMoneyIcon from "../../assets/icons/money.svg";
import SecretFriendIcon from "../../assets/icons/friendOcult.svg";
import Credit from "../../assets/icons/credit.svg";

const projects = ref([
  {
    title: "Rinha de Backend",
    description:
      "This project is an implementation for the 2025 Rinha de Backend, focusing on an asynchronous architecture for payment processing.",
    technologies: [".Net 9", "Docker", "Redis", "Nginx"],
    link: "https://github.com/Goulart12/Rinha2025",
    image: Credit,
  },
  {
    title: "ShopList API",
    description:
      "RESTful API written in .NET for managing a shopping list, with functionality for creating, editing, and deleting items.",
    technologies: [".Net", "Docker", "PostgreSQL", "Redis", "JWT", "Swagger"],
    link: "https://github.com/Goulart12/ShopList_API",
    image: CartShoppingIcon,
  },
  {
    title: "Money Transaction Tech Challenge",
    description:
      "Technical challenge demonstrating a financial transaction system. It was developed in .NET 8 and provides a RESTful API for managing users, wallets, and financial transactions.",
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
    title: "Secret Santa API",
    description:
      "RESTful API in Java to manage a Secret Santa system, allowing the creation of groups, addition of participants and automatic drawing of Secret Santa's.",
    technologies: ["Java", "SpringBoot", "Spring Data JPA", "PostgreSQL"],
    link: "https://github.com/Goulart12/AmigoOculto_API",
    image: SecretFriendIcon,
  },
]);

const breakpoints = {
  700: { itemsToShow: 2, snapAlign: "start" as const },
  1024: { itemsToShow: 3, snapAlign: "start" as const },
};
</script>

<template>
  <section
    id="projects"
    class="py-20 px-6 bg-(--primary-color) shadow-inner w-screen"
  >
    <div class="container mx-auto max-w-6xl text-center">
      <h2 class="text-4xl font-bold text-(--light-color) mb-12 relative pb-4">
        My Projects
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-(--secondary-color) rounded-full"
        ></span>
      </h2>
      <Carousel
        :items-to-show="1"
        :breakpoints="breakpoints"
        :wrap-around="true"
      >
        <Slide v-for="(project, index) in projects" :key="index">
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden border-none hover:shadow-2xl transition duration-300 flex flex-col h-full m-4"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-50 object-cover object-center"
            />
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-2xl font-bold text-(--primary-color) mb-3">
                {{ project.title }}
              </h3>
              <p class="text-(--primary-color) mb-4 flex-grow">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4 justify-center">
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
                class="inline-block bg-(--primary-color) text-white px-6 py-2 rounded-full font-semibold hover:bg-(--secondary-color) transition duration-300 self-center"
              >
                View Project
              </a>
            </div>
          </div>
        </Slide>
        <template #addons>
          <div class="carousel__navigation-wrapper">
            <Navigation />
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style scoped>
@import "tailwindcss";

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--secondary-color);
  color: var(--light-color);
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.carousel__prev) {
  left: -3.125rem;
}
:deep(.carousel__next) {
  right: -3.125rem;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: var(--light-color);
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .carousel__navigation-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1.25rem;
  }
  :deep(.carousel__prev),
  :deep(.carousel__next) {
    position: static;
    transform: translateY(0);
    margin: 0 0.625rem;
  }
  :deep(.carousel__prev) {
    left: auto;
  }
  :deep(.carousel__next) {
    right: auto;
  }
}
</style>
