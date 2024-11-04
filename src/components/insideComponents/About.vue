<script setup lang="ts">

import {openBubbleStore} from "../../stores/OpenBubbleStore.ts";
import {storeToRefs} from "pinia";

const store = openBubbleStore();
const { bubbleIsOpen, bubbleIsOpenOne, bubbleIsOpenTwo, bubbleIsOpenThree, bubbleIsOpenFour } = storeToRefs(store);

const closeBubbleOne = () => {
  bubbleIsOpenOne.value = !bubbleIsOpenOne.value;
  bubbleIsOpen.value = !bubbleIsOpen.value;
}
</script>

<template>
  <div class="main-about">
    <div class="about-container">
      <div class="about-header">
        <img src="../../assets/juarez-profile.jpeg" alt="Foto de perfil" class="profile-picture"/>

        <div class="about-header-info">
          <h1>Juarez Goulart</h1>
          <h3>Back End Developer</h3>
          <h2>juarezgoulartdev@gmail.com</h2>
          <div class="about-social-icons">
            <img src="../../assets/icons/linkedin.png" alt="Linkedin" />
            <img src="../../assets/icons/github.png" alt="Github" />
          </div>
        </div>

        <!--      <div class="about-close"  v-on:click="closeBubbleOne">-->
        <!--        <span class="line firstLine"></span>-->
        <!--        <span class="line secondLine"></span>-->
        <!--      </div>-->
      </div>

      <div class="about-description">
        <p>I am a 24-year-old back-end developer, graduated in Computer Science, currently living in Volta Redonda, RJ. I have solid experience in technologies such as C#, .NET, and SQL and NoSQL databases.
          My work includes building efficient APIs and system integration, as well as using tools like Redis, RabbitMQ, Docker, AWS, and Google Cloud.<br/>
          <br/>
          I also have knowledge in front-end development using JavaScript, TypeScript, and Vue.js. In addition to my technical skills, I value the importance of soft skills in the workplace.
          I am an effective communicator, work well in teams, and have a knack for problem-solving, which allows me to collaborate productively with colleagues from different areas.<br/>
          <br/>
          I am always looking to enhance my skills and contribute to challenging projects that promote innovation and efficiency.
          I am open to new opportunities that allow me to grow and collaborate in dynamic, learning-oriented environments.</p>
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
  </div>
</template>

<style scoped>
.main-about {
  //width: 85rem;
  height: 59rem;
  //border-radius: 1rem;
  overflow: hidden;
  //background: #001974;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-container {
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.5fr;
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
  animation: circulo1 5s linear infinite;
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

.about-header-info h2 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
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


  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.313rem;
  padding-top: 1rem;
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

@keyframes circulo1 {

  0%,
  100% {
    border-radius: 84% 36% 27% 73% / 55% 58% 42% 45%;
  }

  25% {
    border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;
  }

  50% {
    border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
  }

  75% {
    border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
  }
}

@media (max-width: 800px) {
  .profile-picture {
    height: 6.375rem;
    width: 6.375rem;
  }

  .about-header {
    display: grid;
    grid-template-columns: 0.25fr 2fr;
    align-items: center;
    justify-content: center;
  }

  .about-header-info h1 {
    font-size: 1.75rem;
  }

  .about-header-info h3 {
    font-size: 1rem;
  }

  .about-header-info h2 {
    font-size: 0.75rem;
  }

  .about-description p {
    width: 25.75rem;


    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.313rem;
    padding-top: 1rem;
    color: var(--light-color);
  }

  .about-tech-cards {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 1rem;
    align-items: center;
    justify-content: start;
  }
}

</style>