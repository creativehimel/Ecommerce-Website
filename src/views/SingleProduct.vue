<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
const product = ref([])
const router = useRoute()
onBeforeMount(() => {
  axios.get(`https://dummyjson.com/products/${router.params.id}`).then((res) => {
    //console.log(res.data.products)
    product.value = res.data
  })
})
</script>

<template>
  <main class="bg-gray-100 min-h-screen">
    <section class="container mx-auto py-10">
      <div class="grid grid-cols-2 bg-white p-8 rounded">
        <div class="flex items-center justify-center">
          <img :src="product.thumbnail" alt="Product image" class="w-[600px]" />
        </div>
        <div class="">
          <div class="space-y-3 pb-2 border-b-2">
            <h3 class="text-4xl font-bold text-gray-600">{{ product.title }}</h3>
            <div class="flex divide-x-2">
              <div class="pr-3">
                <h5 class="text-green-700">Stock Available: {{ product.stock }}</h5>
              </div>
              <div class="pl-3">
                <v-icon name="bi-star-fill" class="text-yellow-500" scale="1" />
                <v-icon name="bi-star-fill" class="text-yellow-500" scale="1" />
                <v-icon name="bi-star-fill" class="text-yellow-500" scale="1" />
                <v-icon name="bi-star-fill" class="text-yellow-500" scale="1" />
                <v-icon name="bi-star-half" class="text-yellow-500" scale="1" />
                <span class="font-inter font-semibold text-gray-600">({{ product.rating }})</span>
              </div>
            </div>
          </div>

          <div class="border-b-2">
            <h3 class="text-lg font-semibold py-2">
              Price:
              <span class="text-green-800 pl-1">
                ৳{{
                  parseFloat(
                    product.price - (product.price * product.discountPercentage) / 100
                  ).toFixed(2)
                }}
              </span>
              <span>
                <span class="text-red-600 pl-4"
                  ><del>৳{{ product.price }}</del></span
                >
              </span>
            </h3>
          </div>
          <div class="space-y-0.5 border-b-2 py-2">
            <h5><span class="text-lg font-semibold">Brand Name:</span> {{ product.brand }}</h5>
            <h5>
              <span class="text-lg font-semibold pr-0.5">Product Category:</span
              >{{ product.category }}
            </h5>
          </div>
          <div class="space-y-0.5 border-b-2 py-2">
            <h5 class="text-lg font-semibold">Description:</h5>
            <p>{{ product.description }}</p>
          </div>
          <div class="space-x-4 space-y-5">
            <button
              class="bg-green-700 bg-opacity-40 hover:bg-[#8ec641] font-semibold px-6 py-2 rounded mt-1.5 text-green-800 hover:text-white transition-all duration-300"
            >
              <v-icon name="bi-cart3" scale="1.2" class="font-bold" /><span class="pl-0.5"
                >Add to Cart</span
              >
            </button>
            <button
              class="bg-green-700 bg-opacity-40 hover:bg-[#8ec641] font-semibold px-6 py-2 rounded mt-1.5 text-green-800 hover:text-white transition-all duration-300"
            >
              <v-icon name="la-shopping-bag-solid" scale="1.2" class="font-bold" /><span
                class="pl-0.5"
                >Buy Now</span
              >
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
#product-info {
  display: flex;
  width: 95%;
  margin: 0 auto;
}

.item-image-parent {
  order: 1;
  width: 50%;
  display: flex;
}

.item-info-parent {
  order: 2;
  width: 50%;
}

.item-list-vertical {
  order: 1;
  width: 10%;
  overflow-y: auto;
  margin-top: 50px;
}

.item-image-main {
  order: 2;
  width: 90%;
  height: 100%;
}

/* sectioning completed */

.thumb-box {
  width: 75%;
  margin: 10px auto;
  background: white;
  border: 1px solid gray;
}
.thumb-box img {
  width: 100%;
  height: 100%;
}

.item-image-main img {
  width: 100%;
  height: 600px;
}

.thumb-box:hover {
  cursor: pointer;
  border-color: #e77600;
  box-shadow: 0px 1px 5px 1px #e77600;
}

/* Item Info */
.main-info h4 {
  font-size: 21px;
  margin-bottom: 0;
  font-weight: 400;
}

.star-rating {
  width: 70%;
  color: gray;
  font-size: 24px;
  border-bottom: 0.4px solid rgba(194, 194, 194, 0.829);
}

.star-rating span {
  color: gold;
}

.main-info p {
  font-size: 15px;
  color: gray;
  margin-bottom: 30px;
}

#price {
  color: rgb(168, 14, 14);
  font-size: 21px;
}

/* Select Items */

.change-color {
  margin-bottom: 10px;
}

.change-color .thumb-box {
  margin: 10px 10px 10px 0;
  width: 40px;
  display: inline-block;
}

.change-size select {
  padding: 5px 10px;
  border-radius: 4px;
  border-color: rgb(189, 189, 189);
  margin-top: 10px;
}

.description ul {
  padding-left: 17px;
  font-size: 15px;
  line-height: 1.3rem;
}
</style>
