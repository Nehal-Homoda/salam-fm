<script setup lang="ts">

</script>

<template>
    <main class="default-layout">

        <AppNavBar />

        <slot />

        <AppFooter />

    </main>
</template>



<style scoped>
.default-layout {
    height: 100%;
}

</style>