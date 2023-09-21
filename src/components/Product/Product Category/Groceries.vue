<script setup>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import ProductCard from '@/components/Product/ProductCard.vue'
const products = ref([])
onBeforeMount(() => {
  axios.get('https://dummyjson.com/products/category/groceries').then((res) => {
    products.value = res.data.products
  })
})
console.log(products)
</script>

<template>
  <section class="container mx-auto pt-10 pb-20">
    <div
      class="grid place-items-center grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5"
    >
      <ProductCard :product="product" v-for="product in products" :key="product.id" />
    </div>
  </section>
</template>

<style scoped></style>
