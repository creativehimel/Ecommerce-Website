<script setup>
defineProps({
  product: Object
})
function getSlug(title) {
  return title.toLowerCase().replace(/\s+/g, '-')
}
</script>

<template>
  <div class="max-w-xs w-full h-full bg-white rounded shadow border relative overflow-hidden">
    <div class="max-h-36 h-full">
      <img
        :src="product.thumbnail"
        alt="product image"
        class="rounded max-h-36 h-full object-center object-cover w-full"
      />
    </div>
    <div class="px-5 py-3">
      <h3 class="text-md font-inter font-semibold text-gray-700">{{ product.title }}</h3>
      <div>
        <v-icon name="bi-star-fill" class="text-yellow-500" scale="1" />
        <v-icon name="bi-star-fill" class="text-yellow-500" scale="1" />
        <v-icon name="bi-star-fill" class="text-yellow-500" scale="1" />
        <v-icon name="bi-star-fill" class="text-yellow-500" scale="1" />
        <v-icon name="bi-star-half" class="text-yellow-500" scale="1" />
        <span class="font-inter font-semibold text-gray-600">({{ product.rating }})</span>
      </div>
      <div class="font-inter font-semibold space-x-3">
        <span class="text-green-700"
          >৳{{
            parseFloat(product.price - (product.price * product.discountPercentage) / 100).toFixed(
              2
            )
          }}</span
        >
        <span class="text-red-600"
          ><del>৳{{ product.price }}</del></span
        >
      </div>
      <button
        class="bg-green-700 bg-opacity-40 hover:bg-[#8ec641] font-semibold w-full py-1.5 rounded mt-1.5 text-green-800 hover:text-white transition-all duration-300"
      >
        <RouterLink :to="{ name: 'singleProduct', params: { id: product.id } }"
          >View Details</RouterLink
        >
      </button>
    </div>
    <span
      class="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded-full text-xs text-gray-100 font-bold"
      >{{ product.discountPercentage }} %</span
    >
  </div>
</template>

<style scoped></style>
