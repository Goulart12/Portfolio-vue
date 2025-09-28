<script setup lang="ts">
import { ref, computed } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import CSharpIcon from "../../assets/icons/C_sharp.svg";
import AWSIcon from "../../assets/icons/amazon.svg";
import DockerIcon from "../../assets/icons/docker.svg";
import JavascriptIcon from "../../assets/icons/javaScript.svg";
import PostgresIcon from "../../assets/icons/postgresql.svg";
import RavenIcon from "../../assets/icons/raven.svg";
import RedisIcon from "../../assets/icons/redis.svg";
import VueIcon from "../../assets/icons/vue.svg";
import TypescriptIcon from "../../assets/icons/typescript.svg";
import RabbitIcon from "../../assets/icons/rabbitmq.svg";
import GoogleIcon from "../../assets/icons/google-cloud.svg";
import AzureIcon from "../../assets/icons/azure-icon.svg";
import Mongo from "../../assets/icons/mongo.svg";
import Git from "../../assets/icons/git.svg";
import Java from "../../assets/icons/java.svg";
import Tailwind from "../../assets/icons/tailwind.svg";

const skills = ref([
  { name: "C#", icon: CSharpIcon },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "Vue.js", icon: VueIcon },
  { name: "TailwindCSS", icon: Tailwind },
  { name: "AWS", icon: AWSIcon },
  { name: "Google Cloud", icon: GoogleIcon },
  { name: "Azure", icon: AzureIcon },
  { name: "Git", icon: Git },
  { name: "Docker", icon: DockerIcon },
  { name: "RabbitMQ", icon: RabbitIcon },
  { name: "Redis", icon: RedisIcon },
  { name: "PostgreSql", icon: PostgresIcon },
  { name: "RavenDB", icon: RavenIcon },
  { name: "MongoDB", icon: Mongo },
]);

const chunkedSkills = computed(() => {
  const chunkSize = 6;
  const chunks = [];
  const skillsArray = skills.value;
  for (let i = 0; i < skillsArray.length; i += chunkSize) {
    chunks.push(skillsArray.slice(i, i + chunkSize));
  }
  return chunks;
});
</script>

<template>
  <section id="skills" class="py-20 px-6 bg-gray-50 w-screen">
    <div class="mx-auto max-w-5xl h-full text-center">
      <h2 class="text-4xl font-bold text-(--primary-color) mb-6 relative pb-4">
        Habilidades
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-(--secondary-color) rounded-full"
        ></span>
      </h2>

      <div
        class="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10"
      >
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
        >
          <img :src="`${skill.icon}`" class="size-20 mb-4" />
          <p class="text-xl font-semibold text-(--primary-color)">
            {{ skill.name }}
          </p>
        </div>
      </div>

      <div class="block md:hidden mt-10">
        <Carousel :items-to-show="1" :wrap-around="true">
          <Slide
            v-for="(skillChunk, chunkIndex) in chunkedSkills"
            :key="chunkIndex"
          >
            <div class="grid grid-cols-2 gap-4 p-1">
              <div
                v-for="(skill, skillIndex) in skillChunk"
                :key="skillIndex"
                class="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg"
              >
                <img :src="`${skill.icon}`" class="size-16 mb-2" />
                <p
                  class="text-base font-semibold text-(--primary-color) text-center"
                >
                  {{ skill.name }}
                </p>
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
    </div>
  </section>
</template>

<style scoped>
@import "tailwindcss";

.carousel__navigation-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--primary-color);
  color: var(--light-color);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.625rem;
  position: static;
  transform: none;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}
</style>
