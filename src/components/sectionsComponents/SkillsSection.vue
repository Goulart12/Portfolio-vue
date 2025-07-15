<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";

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

const skills = ref([
  { name: "C#", icon: CSharpIcon },
  { name: "PostgreSql", icon: PostgresIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Vue.js", icon: VueIcon },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "AWS", icon: AWSIcon },
  { name: "Redis", icon: RedisIcon },
  { name: "RavenDB", icon: RavenIcon },
  { name: "RabbitMQ", icon: RabbitIcon },
]);
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
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10"
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
    </div>
  </section>
</template>

<style>
@import "tailwindcss";
</style>
