<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import CartShoppingIcon from "../../assets/icons/list.svg";
import CashMoneyIcon from "../../assets/icons/money.svg";
import SecretFriendIcon from "../../assets/icons/friendOcult.svg";

const projects = ref([
  {
    title: "Lista de Compras API",
    description:
      "API RESTful feita em .NET para gerenciamento de uma lista de compras, com funcionalidades de criação, edição e exclusão de itens.",
    technologies: [".Net", "Docker", "PostgreSQL", "Redis", "JWT", "Swagger"],
    link: "https://github.com/Goulart12/ShopList_API",
    image: CartShoppingIcon,
  },
  {
    title: "Desafio técnico Money Transaction",
    description:
      "Desafio técnico que demonstra um sistema de transações financeiras. Ele foi desenvolvido em .NET 8 e fornece uma API RESTful para gerenciar usuários, carteiras e transações financeiras.",
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
      "API RESTful em Java para gerenciar um sistema de amigo oculto, permitindo a criação de grupos, adição de participantes e sorteio automático dos amigos ocultos.",
    technologies: ["Java", "SpringBoot", "Spring Data JPA", "PostgreSQL"],
    link: "https://github.com/Goulart12/AmigoOculto_API",
    image: SecretFriendIcon,
  },
]);

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};

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
              @error="onImageErrorProject"
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
                Ver Projeto
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

<style>
@import "tailwindcss";

.carousel__prev,
.carousel__next {
  background-color: var(--secondary-color);
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__prev {
  left: -50px;
}
.carousel__next {
  right: -50px;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: var(--light-color);
  color: var(--primary-color);
}

.carousel__pagination-button::after {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}
.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: var(--primary-color);
}

@media (max-width: 768px) {
  .carousel__navigation-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .carousel__prev,
  .carousel__next {
    position: static;
    transform: translateY(0);
    margin: 0 10px;
  }
  .carousel__prev {
    left: auto;
  }
  .carousel__next {
    right: auto;
  }
}
</style>
