<script setup lang="ts">

defineProps({
    value: Function,
    waves: Boolean,
})
</script>

<template>
    <button id="main-button" class="main-button" v-on:click="value">
        <span>COMEÇAR</span>
        <div class="liquid" :class="{ active: waves }"></div>
    </button>
</template>

<style scoped>
.main-button {
    position: relative;
    width: 12.5rem;
    height: 4.375rem;
    margin-top: 6.25rem;
    display: block;
    overflow: hidden;

    border: 0.125rem solid var(--secondary-color);
    box-sizing: border-box;

    cursor: pointer;

    z-index: 2001;

}

.main-button span {
    position: relative;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;

    text-align: center;

    color: var(--secondary-color);
    z-index: 2002;
}

.main-button .liquid {
    position: absolute;

    top: -5rem;
    width: 12.5rem;
    height: 12.5rem;

    overflow: hidden;

    background: var(--primary-color);

    transition: 0.5s;
    z-index: 2001;
}

.main-button:hover .liquid {
    top: -7.5rem;
}

.main-button .liquid.active {
    animation: liquidoAtivo 3s linear forwards;
}

.liquid::before,
.liquid::after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
}

.liquid::before {
    border-radius: 45%;
    background: rgba(255, 255, 255, 1);
    animation: liquido 5s linear infinite;
}

.liquid::after {
    border-radius: 40%;
    background: rgba(255, 255, 255, 0.5);
    animation: liquido 10s linear infinite;
}

@keyframes liquido {
    0% {
        transform: translate(-50%, -75%) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -75%) rotate(360deg);
    }
}

@keyframes liquidoAtivo {
    0% {
        top: -5rem;
    }

    100% {
        top: -7.5rem;
    }
}
</style>