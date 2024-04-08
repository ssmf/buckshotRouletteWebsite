<script setup>

</script>

<template>
    <div class="Navbar row">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/blog">What's new</NuxtLink>
        <NuxtLink to="/#about">About</NuxtLink>
        <NuxtLink to="/#newsletter">Newsletter</NuxtLink>
    </div>
</template>

<style scoped>
.Navbar {
    position: sticky;
    top: 0px;
    left: 0px;
    z-index: 5;
    background-color: black;
    height: 80px;
    gap: 50px;
}
</style>