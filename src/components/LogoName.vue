<script setup lang="ts">
</script>

<template>
    <div class="content">
        <h2>Juarez</h2>
        <h2>Juarez</h2>
    </div>
</template>

<style scoped>
.content {
    /* position: relative; */
    margin-top: 18.75rem;
    z-index: 2000;
}

.content h2 {
    position: absolute;
    color: var(--light-color);
    transform: translate(-50%, -50%);
    font-size: 8rem;
}

.content h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 0.125rem var(--secondary-color);
}

.content h2:nth-child(2) {
    color: var(--secondary-color);
    animation: nomeLiquido 4s ease-in-out infinite;
}

@keyframes nomeLiquido {

    0%,
    100% {
        clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }

    50% {
        clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
}
</style>