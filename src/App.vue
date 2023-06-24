<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="wrapper">
      <RouterLink to="/">
        Index
      </RouterLink>
      <RouterLink to="/about">
        About
      </RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;

  a {
    margin-right: 0.75rem;
  }

  .router-link-active {
    text-decoration: none;
    color: black;
    pointer-events: none;
  }
}
</style>