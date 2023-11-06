<script setup lang="ts">
</script>

<template>
    <div class="circles circle1"></div>
    <div class="circles circle2"></div>
    <div class="circles circle3"></div>
    <div class="circles circle4"></div>
    <div class="circles circle5"></div>
    <div class="circles circle6"></div>
    <div class="circles circle7"></div>
</template>

<style>
.circles {
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(180deg, #00EC6D 0%, #001974 100%);
    ;
}

.circle1 {
    width: 18.75rem;
    height: 18.75rem;
    animation: circulo1 5s linear infinite;
    z-index: 1;
}

.circle2 {
    width: 25rem;
    height: 25rem;
    animation: circulo2 5s linear infinite;
    z-index: 1;
}

.circle3 {
    width: 31.25rem;
    height: 31.25rem;
    animation: circulo3 5s linear infinite;
    z-index: 1;
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

@keyframes circulo2 {

    0%,
    100% {
        border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;

    }

    25% {
        border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;

    }

    50% {
        border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
    }

    75% {
        border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
    }
}

@keyframes circulo3 {

    0%,
    100% {
        border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
    }

    25% {
        border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
    }

    50% {
        border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;
    }

    75% {
        border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;
    }
}
</style>