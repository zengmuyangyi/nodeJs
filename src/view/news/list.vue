<template>
  <div class="my-30">
    <div class="w-full min-h-450">
      <div v-for="(item, index) in data.value" :key="item.id">
        <div
          class="w-full box-border h-28 pl-11 text-#999 leading-28 flex justify-between news-item"
        >
          <div class="text-#333 text-14 cursor-pointer truncate flex-1" @click="goDetail(item)">
            {{ getText(item.title) }}
          </div>
          <div class="flex-shrink-0">{{ item.publishTime }}</div>
        </div>
        <div
          v-if="!((index + 1) % 4)"
          class="my-30 border-b-1 border-b-dashed border-b-#676767"
        ></div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <a-pagination :total="total" :current="pageNum" @change="changePage" />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { fetchNewsList, fetchNewsType } from '@/api/scenic'
import { getText } from '@/untils'
import { useApp } from '@/stores'
const route = useRoute()
const router = useRouter()
const data = reactive([])
const pageNum = ref(1)
const total = ref(0)
const { menuList } = useApp()
const getNewsList = async () => {
  const params = {
    pageSize: 12,
    pageNum: pageNum.value,
    typeId: route.query.typeId - 0,
    menuId: route.query.menuId - 0,
    status: 1,
  }
  if (!route.query.typeId) {
    const menuId = menuList.value.find((item) => item.templateCode === 'news')
    const res = await fetchNewsType(menuId.id)
    params.typeId = res.list[0].id
  }
  const res = await fetchNewsList(params)
  total.value = res.total
  data.value = res.list
}
const changePage = (e) => {
  pageNum.value = e
  getNewsList()
}
onMounted(() => {
  getNewsList()
})
watch(
  () => route.query.typeId,
  (newVal, oldVal) => {
    getNewsList()
  }
)
watch(
  () => route.query.menuId,
  (newVal, oldVal) => {
    getNewsList()
  }
)
const goDetail = (item) => {
  if (item.url) {
    window.open(item.url)
  } else {
    router.push({
      name: 'newsDetail',
      query: {
        id: item.id,
      },
    })
  }
}
</script>

<style scoped lang="scss"></style>
