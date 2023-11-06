<script setup lang="ts">
defineProps({
    valueWave: Boolean,
})
</script>

<template>
    <div class="wave wave1" :class="{ active: valueWave }"></div>
    <div class="wave wave2" :class="{ active: valueWave }"></div>
    <div class="wave wave3" :class="{ active: valueWave }"></div>
    <div class="wave wave4" :class="{ active: valueWave }"></div>
    <div class="wave-support" :class="{ active: valueWave }"></div>
</template>

<style scoped>
.wave-support {
    width: 100%;
    height: 25%;
    background-color: var(--primary-color);
    position: absolute;
    bottom: 0;
    left: 0;
}

.wave-support.active {
    animation: subindo 4s linear forwards;
}

.wave {
    position: absolute;
    top: 65%;
    left: 0;
    width: 100%;
    height: 6.25rem;
    background: url(../assets/onda.png);
    background-size: 62.5rem 6.875rem;
}

@media (min-height: 62.5rem) {
    .wave-support {
        height: 30%;
    }
}

.wave.wave1 {
    animation: animate 30s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 25%;
}

.wave1.active {
    animation: subindoOnda 4s linear forwards, animate 30s linear infinite;
}

.wave.wave2 {
    animation: animate2 15s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 26%;
}

.wave2.active {
    animation: subindoOnda2 4s linear forwards, animate2 15s linear infinite;
}

.wave.wave3 {
    animation: animate 30s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 26.5%;
}

.wave3.active {
    animation: subindoOnda3 4s linear forwards, animate 30s linear infinite;
}

.wave.wave4 {
    animation: animate2 5s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 27%;
}

.wave4.active {
    animation: subindoOnda4 4s linear forwards, animate2 5s linear infinite;
}

@keyframes animate {
    0% {
        background-position-x: 0;
    }

    100% {
        background-position-x: 62.5rem;
    }
}

@keyframes animate2 {
    0% {
        background-position-x: 0;
    }

    100% {
        background-position-x: -62.5rem;
    }
}

@keyframes subindo {
    0% {
        height: 25%;
        transform: rotate(0deg);
    }

    25% {
        height: 30%;
        transform: rotate(0deg);
    }

    50% {
        height: 50%;
        transform: rotate(0deg);
    }

    75% {
        height: 65%;
        transform: rotate(0deg);
    }

    100% {
        height: 90%;
        transform: rotate(0deg);
    }
}

@keyframes subindoOnda {
    0% {
        top: 65%;
        transform: rotate(0deg);
    }

    25% {
        top: 60%;
        transform: rotate(0deg);
    }

    50% {
        top: 40%;
        transform: rotate(0deg);
    }

    75% {
        top: 25%;
        transform: rotate(0deg);
    }

    100% {
        top: 0;
        transform: rotate(0deg);
    }
}

@keyframes subindoOnda2 {
    0% {
        top: 64%;
        transform: rotate(0deg);
    }

    25% {
        top: 59%;
        transform: rotate(0deg);
    }

    50% {
        top: 39%;
        transform: rotate(0deg);
    }

    75% {
        top: 24%;
        transform: rotate(0deg);
    }

    100% {
        top: -1%;
        transform: rotate(0deg);
    }
}

@keyframes subindoOnda3 {
    0% {
        top: 63.5%;
        transform: rotate(0deg);
    }

    25% {
        top: 58.5%;
        transform: rotate(0deg);
    }

    50% {
        top: 38.5%;
        transform: rotate(0deg);
    }

    75% {
        top: 23.5%;
        transform: rotate(0deg);
    }

    100% {
        top: -1.5%;
        transform: rotate(0deg);
    }
}

@keyframes subindoOnda4 {
    0% {
        top: 63%;
        transform: rotate(0deg);
    }

    25% {
        top: 58%;
        transform: rotate(0deg);
    }

    50% {
        top: 38%;
        transform: rotate(0deg);
    }

    75% {
        top: 23%;
        transform: rotate(0deg);
    }

    100% {
        top: -2%;
        transform: rotate(0deg);
    }
}
</style>