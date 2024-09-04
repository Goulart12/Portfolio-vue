<script setup lang="ts">

import {openBubbleStore} from "../../stores/OpenBubbleStore.ts";
import {storeToRefs} from "pinia";

const store = openBubbleStore();
const { bubbleIsOpenOne, bubbleIsOpenTwo, bubbleIsOpenThree, bubbleIsOpenFour } = storeToRefs(store);
</script>

<template>
  <div class="about-container">

    <div class="about-header">
      <img src="../../assets/juarez-profile.jpeg" alt="Foto de perfil" class="profile-picture"/>

      <div class="about-header-info">
        <h1>Juarez Goulart</h1>
        <h3>Back End Developer</h3>
        <div class="about-social-icons">
          <img src="../../assets/icons/linkedin.png" alt="Linkedin" />
          <img src="../../assets/icons/github.png" alt="Github" />
        </div>
      </div>

      <div class="about-close"  v-on:click="bubbleIsOpenOne = !bubbleIsOpenOne">
        <span class="line firstLine"></span>
        <span class="line secondLine"></span>
      </div>
    </div>

    <div class="about-description">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        iusto. Sed, hic corrupti autem atque provident debitis ex modi facilis iusto mollitia nam maxime sit eos vitae illo nisi eligendi
        animi reiciendis laborum odit in aperiam natus! Voluptatibus perferendis doloribus tenetur veritatis numquam natus, iste, eaque
        dicta, magni aspernatur sunt corrupti consequatur? Porro tempora
        veritatis vitae maxime dolor, facilis quidem quae ipsam voluptatibus
        doloribus eius eum temporibus assumenda deleniti nulla minus quos possimus magnam adipisci dignissimos sapiente consequatur
        recusandae. Quaerat saepe adipisci, nihil, quae necessitatibus dicta assumenda labore blanditiis fugit similique ipsum quod culpa
        distinctio dolore ex quasi odio veritatis.</p>
    </div>

    <div class="about-tech">
      <h1>Tecnologias</h1>
      <div class="about-tech-cards">
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
</template>

<style scoped>
.about-container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 3.125rem;
}

.about-header {
  display: grid;
  grid-template-columns: 0.25fr 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.profile-picture {
  height: 9.375rem;
  width: 9.375rem;
  border-radius: 50%;
}

.about-header-info {
  padding-left: 0.625rem;
}

.about-header-info h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  color: var(--light-color);
}

.about-header-info h3 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.875rem;

  color: var(--light-color);
}

.about-social-icons {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 0.625rem;
  align-items: center;
  justify-content: start;

  padding-top: 0.625rem;
}

.about-social-icons img {
  width: 1.875rem;
  height: 1.875rem;
}

.about-close {
  width: 3.75rem;
  height: 3.75rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-left: 20rem;
  margin-bottom: 4.375rem;
}

.about-close .line{
  width: 2.5rem;
  height: 0.563rem;
  background: var(--primary-color);
}

.about-close .firstLine {
  margin-bottom: -0.2815rem;
  transform: rotate(45deg);
}

.about-close .secondLine {
  margin-top: -0.2815rem;
  transform: rotate(-45deg);
}

.about-description p {
  width: 58.75rem;
  height: 9.188rem;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.313rem;
  padding-top: 2.125rem;
  color: var(--light-color);
}

.about-tech h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 3rem;
  color: var(--light-color);
}

.about-tech-cards {
  display: grid;
  grid-template-columns: repeat(9, auto);
  grid-gap: 1rem;
  align-items: center;
  justify-content: start;
}

.about-tech-cards img {
  width: 2.5rem;
  height: 2.5rem;
}
</style>