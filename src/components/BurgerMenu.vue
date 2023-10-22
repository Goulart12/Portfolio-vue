<script setup lang="ts">
import { ref } from "vue";

const navOpen = ref(false);
</script>

<template>
  <div class="navigation" v-bind:class="{ active: navOpen }">
    <button
      class="navigation-button"
      v-on:click="navOpen = !navOpen"
      v-bind:class="{ active: navOpen }"
    >
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background: #001974;
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: #001974;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2002;
  cursor: pointer;
}

.navigation-button .line {
  width: 40px;
  height: 5px;
  background: #00ec6d;
  z-index: 2003;
}

.navigation-button .firstLine.active {
  margin-bottom: 4px;
  animation: primeiraLinha 0.3s linear forwards;
}

.navigation-button .secondLine {
  margin-top: 8px;
  margin-bottom: 8px;
}

.navigation-button .secondLine.active {
  display: none;
}

.navigation-button .thirdLine.active {
  margin-top: 4px;
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
  margin-bottom: 5px;
}

.navigation-topic li a {
  text-decoration: none;
  font-size: 22px;
  color: #00ec6d;
}

.navigation-topic .first-li {
  margin-top: 30px;
}

@keyframes primeiraLinha {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(45deg);
    margin-bottom: -2.5px;
  }
}

@keyframes terceiraLinha {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-45deg);
    margin-top: -2.5px;
  }
}

@keyframes navigationMenu {
  0% {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  100% {
    width: 200px;
    height: 300px;
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
