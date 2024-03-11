<template>
  <div>
    <h1 class="text-center text-21 text-black leading-70 my-20">
      {{ getText(data.value?.title) }}
    </h1>
    <h4 class="text-center h-28 text-12 leading-24 border-1 border-dashed border-#ccc">
      作者：{{ data.value?.author }}&nbsp;&nbsp;发布时间：{{
        data.value?.publishTime
      }}&nbsp;&nbsp;阅读次数：{{ data.value?.readNumber }}
    </h4>
    <div class="min-h-500 leading-28 mt-20">
      <div v-html="getText(data.value?.content)"></div>
    </div>
  </div>
</template>

<script setup>
import { fetchNews } from '@/api/scenic'
import { getText } from '@/untils'
import { useRoute } from 'vue-router'
const route = useRoute()
const data = reactive({})
const getNews = async () => {
  const res = await fetchNews(route.query.id - 0)
  console.log('###', res)
  data.value = res
}
watch(
  () => route.query.id,
  (newVal, oldVal) => {
    getNews()
  }
)
onMounted(() => {
  getNews()
})
</script>
