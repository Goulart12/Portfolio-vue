<script setup lang="ts">
import { ref } from "vue";

const navOpen = ref(false);
</script>

<template>
  <div class="navigation" v-bind:class="{ active: navOpen }">
    <button class="navigation-button" v-on:click="navOpen = !navOpen" v-bind:class="{ active: navOpen }">
      <span class="line firstLine" v-bind:class="{ active: navOpen }"></span>
      <span class="line secondLine" v-bind:class="{ active: navOpen }"></span>
      <span class="line thirdLine" v-bind:class="{ active: navOpen }"></span>
    </button>

    <ul class="navigation-topic" v-bind:class="{ active: navOpen }">
      <li class="first-li"><a href="#about">Sobre mim</a></li>
      <li><a href="#">Projetos</a></li>
      <li><a href="#">Tecnologias</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </div>
</template>

<style>
.navigation {
  position: absolute;
  right: 10%;
  top: 8%;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: none;
  background: var(--primary-color);
  z-index: 2002;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation.active {
  animation: navigationMenu 0.3s linear forwards;
}

.navigation.active .navigation-button {
  position: absolute;
  top: 5%;
}

.navigation .navigation-button {
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  border: none;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2002;
  cursor: pointer;
}

.navigation-button .line {
  width: 2.5rem;
  height: 0.313rem;
  background: var(--secondary-color);
  z-index: 2003;
}

.navigation-button .firstLine.active {
  margin-bottom: 0.25rem;
  animation: primeiraLinha 0.3s linear forwards;
}

.navigation-button .secondLine {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.navigation-button .secondLine.active {
  display: none;
}

.navigation-button .thirdLine.active {
  margin-top: 0.25rem;
  animation: terceiraLinha 0.3s linear forwards;
}

.navigation-topic {
  list-style: none;
  text-align: center;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.navigation-topic.active {
  display: flex;
  animation: topico 1s linear forwards;
}

.navigation-topic li {
  margin-bottom: 0.313rem;
}

.navigation-topic li a {
  text-decoration: none;
  font-size: 1.375rem;
  color: var(--secondary-color);
}

.navigation-topic .first-li {
  margin-top: 1.875rem;
}

@keyframes primeiraLinha {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(45deg);
    margin-bottom: -0.156rem;
  }
}

@keyframes terceiraLinha {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-45deg);
    margin-top: -0.156rem;
  }
}

@keyframes navigationMenu {
  0% {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  100% {
    width: 12.5rem;
    height: 18.75rem;
    border-radius: 5%;
  }
}

@keyframes topico {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
