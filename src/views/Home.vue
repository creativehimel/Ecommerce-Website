<script setup>
import Smartphone from '@/components/Product/Product Category/Smartphone.vue'
import Laptops from '@/components/Product/Product Category/Laptops.vue'
import Fragrances from '@/components/Product/Product Category/Fragrances.vue'
import HomeDecoration from '@/components/Product/Product Category/HomeDecoration.vue'
import Groceries from '@/components/Product/Product Category/Groceries.vue'
</script>

<template>
  <main class="bg-gray-100 min-h-screen h-auto">
    <section class="container mx-auto">
      <div>
        <h3 class="text-2xl font-inter font-semibold py-2 border-b-2">Smartphone</h3>
        <Smartphone />
      </div>
      <div>
        <h3 class="text-2xl font-inter font-semibold py-2 border-b-2">Laptops</h3>
        <Laptops />
      </div>
      <div>
        <h3 class="text-2xl font-inter font-semibold py-2 border-b-2">Fragrances</h3>
        <Fragrances />
      </div>
      <div>
        <h3 class="text-2xl font-inter font-semibold py-2 border-b-2">Home Decoration</h3>
        <HomeDecoration />
      </div>
      <div>
        <h3 class="text-2xl font-inter font-semibold py-2 border-b-2">Groceries</h3>
        <Groceries />
      </div>
    </section>
  </main>
</template>
