<template>
  <div class="w-full">
    <div v-for="item in data.value" :key="item.id" class="w-full h-248 flex">
      <div class="flex-shrink-0 w-308 h-full mr-62">
        <div
          class="w-full h-188 my-auto bg-cover bg-center"
          :style="{ backgroundImage: `url(${getText(item.coverImage)})` }"
        ></div>
      </div>
      <div class="flex-1">
        <div class="flex justify-between items-center">
          <div class="text-20 leading-28 font-600">{{ getText(item.title) }}</div>
          <div
            @click="goDetail(item)"
            class="w-116 h-42 border-1 border-solid text-center leading-42 text-18 cursor-pointer overflow-hidden relative moreBox"
          >
            {{ $t('LearnMore') }}

            <div
              class="absolute h-full top-50% left-50% translate-x--50% translate-y--50% bg-opacity-40 rounded-full moreBg"
            ></div>
          </div>
        </div>
        <div class="mt-8 text-18 leading-32">{{ item.publishTime }}</div>
        <div class="mt-24 text-#999 text-16 leading-32 u-line-3">
          {{ getText(item.indroduction) }}
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <a-pagination :total="total" :current="pageNum" @change="changePage" />
    </div>
  </div>
</template>

<script setup>
import $t from '@/service/i18n'
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
    pageSize: 10,
    pageNum: pageNum.value,
    typeId: route.query.typeId - 0,
    menuId: route.query.menuId - 0,
    status: 1,
  }
  if (!route.query.typeId) {
    const menuId = menuList.value.find((item) => item.templateCode === 'guide')
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
      name: 'guideDetail',
      query: {
        id: item.id,
      },
    })
  }
}
</script>

<style scoped lang="scss">
.moreBox {
  transition-property: all;
  transition-duration: 500ms;
}
.moreBox:hover {
  .moreBg {
    animation: ani 1.2s infinite;
  }
}
@keyframes ani {
  0% {
    width: 0px;
    height: 0px;
    background-color: #a3a3a3;
  }
  100% {
    width: 145px;
    height: 145px;
    background-color: rgba($color: #a3a3a3, $alpha: 0);
  }
}
</style>
