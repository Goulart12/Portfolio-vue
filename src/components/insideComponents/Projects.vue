<script setup lang="ts">
import {openBubbleStore} from "../../stores/OpenBubbleStore.ts";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const store = openBubbleStore();
const { bubbleIsOpen, bubbleIsOpenOne, bubbleIsOpenTwo, bubbleIsOpenThree, bubbleIsOpenFour } = storeToRefs(store);

const closeBubbleOne = () => {
  bubbleIsOpenOne.value = !bubbleIsOpenOne.value;
  bubbleIsOpen.value = !bubbleIsOpen.value;
}

const galleryIsOpen = ref(false);
const OpenGallery = () => {
  galleryIsOpen.value = !galleryIsOpen.value;
}

const images = [
  "initial.png",
  "initial.png",
  "initial.png",
  "initial.png"
];
</script>

<template>
  <div class="project-container">

    <div class="project-content" v-if="!galleryIsOpen">
      <div class="project-header">
        <div class="project-header-info">
          <h1>Juarez Goulart</h1>
          <div class="project-social-icons">
            <img src="../../assets/icons/github.png" alt="Github" />
            <img src="../../assets/icons/gallery.svg" alt="Galeria" v-on:click="OpenGallery" />
          </div>
        </div>
        <div class="project-close"  v-on:click="closeBubbleOne">
          <span class="line firstLine"></span>
          <span class="line secondLine"></span>
        </div>
      </div>

      <div class="project-description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          iusto. Sed, hic corrupti autem atque provident debitis ex modi facilis iusto mollitia nam maxime sit eos vitae illo nisi eligendi
          animi reiciendis laborum odit in aperiam natus! Voluptatibus perferendis doloribus tenetur veritatis numquam natus, iste, eaque
          dicta, magni aspernatur sunt corrupti consequatur? Porro tempora
          veritatis vitae maxime dolor, facilis quidem quae ipsam voluptatibus
          doloribus eius eum temporibus assumenda deleniti nulla minus quos possimus magnam adipisci dignissimos sapiente consequatur
          recusandae. Quaerat saepe adipisci, nihil, quae necessitatibus dicta assumenda labore blanditiis fugit similique ipsum quod culpa
          distinctio dolore ex quasi odio veritatis.</p>
      </div>

      <div class="project-tech">
        <h1>Tecnologias</h1>
        <div class="project-tech-cards">
          <img src="../../assets/icons/C_sharp.svg" alt="">
          <img src="../../assets/icons/javaScript.svg" alt="">
          <img src="../../assets/icons/vue.svg" alt="">
          <img src="../../assets/icons/typescript.svg" alt="">
          <img src="../../assets/icons/docker.svg" alt="">
          <img src="../../assets/icons/amazon.svg" alt="">
          <img src="../../assets/icons/postgresql.svg" alt="">
          <img src="../../assets/icons/raven.svg" alt="">
          <img src="../../assets/icons/redis.svg" alt="">
        </div>
      </div>
    </div>

    <div class="slider-container" v-if="galleryIsOpen" @click.self="OpenGallery">
      <div class="slider-close"  v-on:click="OpenGallery">
        <img src="src/assets/icons/x_icon.svg">
      </div>

      <div class="slider-content">
        <carousel :items-to-show="1">
          <slide v-for="image in images" :key="images">
            <img class="project-image" :src="`src/assets/${image}`" alt="Imagens">
          </slide>

          <template #addons="">
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>

    </div>
  </div>
</template>

<style scoped>
.project-container {
  //display: grid;
  //grid-template-rows: 1fr 1fr 0.25fr;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.125rem;
}

.project-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.project-header-info h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  color: var(--light-color);
}

.project-header-info h3 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.875rem;

  color: var(--light-color);
}

.project-social-icons {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 0.625rem;
  align-items: center;
  justify-content: start;

  padding-top: 0.625rem;
}

.project-social-icons img {
  width: 1.875rem;
  height: 1.875rem;
}

.project-close {
  width: 3.75rem;
  height: 3.75rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-left: 25rem;
  margin-bottom: 1.375rem;
}

.project-close .line{
  width: 2.5rem;
  height: 0.563rem;
  background: var(--primary-color);
}

.project-close .firstLine {
  margin-bottom: -0.2815rem;
  transform: rotate(45deg);
}

.project-close .secondLine {
  margin-top: -0.2815rem;
  transform: rotate(-45deg);
}

.project-description p {
  width: 58.75rem;
  height: 9.188rem;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.313rem;
  color: var(--light-color);
  padding-top: 1rem;
}

.project-tech h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 3rem;
  color: var(--light-color);
}

.project-tech-cards {
  display: grid;
  grid-template-columns: repeat(9, auto);
  grid-gap: 1rem;
  align-items: center;
  justify-content: start;
}

.project-tech-cards img {
  width: 2.5rem;
  height: 2.5rem;
}

.slider-close {
  width: 2.75rem;
  height: 2.75rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 1.375rem;
}

.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.slider-content {
  width: 55rem;
  height: 32rem;
}

.project-image {
  width: 45rem;
  height: 29rem;
}

@media (max-width: 800px) {

  .project-header {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  .project-header-info {
    align-items: center;
  }

  .project-close {
    margin-left: 0;
  }

  .project-header-info h1 {
    font-size: 1.75rem;
    text-align: center;
  }

  .project-social-icons {
    align-items: center;
    justify-content: center;
  }

  .project-description p {
    width: 25.75rem;
    padding-bottom: 20rem;
    text-align: center;
  }

  .project-tech h1{
    text-align: center;
  }

  .project-tech-cards {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .slider-content {
    width: 30rem;
    height: 32rem;
  }

  .project-image {
    width: 25rem;
    height: 20rem;
  }
}
</style>