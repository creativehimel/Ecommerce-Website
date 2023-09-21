<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-white shadow py-3 sticky top-0 left-0 z-50">
    <section class="container mx-auto">
      <nav class="flex justify-between items-center">
        <h1 class="font-bold font-inter text-4xl text-green-700">Ecom.</h1>
        <ul class="flex gap-x-4 font-semibold text-lg text-gray-700">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/product">Shop</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog">Blog</RouterLink>
          </li>
        </ul>
        <div>
          <button
            class="bg-green-600 px-6 py-2 rounded text-white font-inter font-semibold text-lg"
          >
            Login
          </button>
        </div>
      </nav>
    </section>
  </header>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: #15803d;
}
</style>
