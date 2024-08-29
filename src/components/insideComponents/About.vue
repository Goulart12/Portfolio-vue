<script setup lang="ts">

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

      <div class="about-close">
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
  grid-template-columns: 0.25fr 1fr;
  align-items: center;
  justify-content: center;
}

.profile-picture {
  height: 9.375rem;
  width: 9.375rem;
  border-radius: 50%;
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

.about-social-icons img {
  width: 30px;
  height: 30px;
}

.about-tech-cards img {
  width: 40px;
  height: 40px;
}
</style>