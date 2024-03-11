<template>
  <div class="w-full">
    <div class="w-full h-428 common-bg"></div>
    <div class="w-1200 mx-auto bg-white py-40 box-border relative">
      <!-- <Side></Side> -->
      <div class="bg-black bg-opacity-50 p-10 box-border absolute top--80">
        <div
          class="w-full h-full border-3 border-white py-20 px-36 text-white text-28 leading-40 font-600"
        >
          {{ getText(currentData.value?.title) }}
        </div>
      </div>
      <div class="flex items-center">
        <img src="@/static/ui/icon.png" class="w-20 h-20" alt="" />
        <div class="ml-9 text-14 leading-20 font-600 text-#3a3a3a">
          {{ $t('YourPosition') }}&nbsp;{{ $t('HomeTwo') }}&nbsp;&nbsp;>>&nbsp;&nbsp;{{
            $t('AboutUs')
          }}&nbsp;&nbsp;>>&nbsp;&nbsp;<span class="text-14 leading-20 font-600 text-#000">{{
            getText(currentData.value?.title)
          }}</span>
        </div>
      </div>
      <div class="mt-38 text-22 leading-30 font-600">{{ $t('AboutUs') }}</div>
      <div class="flex items-center mt-17 flex-wrap">
        <div
          v-for="item in data.value"
          :key="item.id"
          class="px-20 py-10 text-16 font-400 leading-22 rounded-18 mr-16 cursor-pointer mb-10"
          :style="{
            backgroundColor: currentData.value?.id === item.id ? '#000' : '#eaeaea',
            color: currentData.value?.id === item.id ? '#fff' : '#3a3a3a',
          }"
          @click="changeInfo(item)"
        >
          {{ getText(item.title) }}
        </div>
      </div>
      <div class="flex justify-between mt-40">
        <div class="flex-1" v-html="getText(currentData.value?.introduction)"></div>
        <video
          v-show="currentData.value?.booking_information"
          :src="currentData.value?.booking_information"
          controls
          class="w-full h-500"
        ></video>
        <!-- <img src="@/static/ui/common-title.png" alt="盐城龙冈桃花源" class="w-4 h-568 ml-42" />
        <div class="w-32 text-30 ml-15 qiantu">{{ getText(currentData.value?.title) }}</div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchPlaceList } from '@/api/scenic'
import $t from '@/service/i18n'
import { useApp } from '@/stores'
import { getText } from '@/untils'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { menuList, currentScenic } = useApp()
const data = reactive([])
const currentData = reactive({})
const getPlaceList = () => {
  const menuId = menuList.value?.find((item) => item.templateCode === 'place')
  const params = {
    pageSize: 0,
    pageNum: 0,
    status: 1,
    menuId: menuId?.id,
  }
  fetchPlaceList(params).then(
    (res) => {
      data.value = res.list
      if (route.query?.id) {
        currentData.value = res.list.find((item) => item.id === route.query?.id - 0)
      } else {
        currentData.value = res.list[0]
      }
      console.log(
        console.log('%c [ 介绍列表 ]-05', 'font-size:13px; background:pink; color:#bf2c9f;', res)
      )
    },
    (err) => {
      console.log('***', err)
    }
  )
}
const changeInfo = (item) => {
  currentData.value = item
}
watch(
  () => route.query.id,
  (newVal, oldVal) => {
    if (route.query.id) {
      currentData.value = data.value.find((item) => item.id === route.query?.id - 0)
    } else {
      currentData.value = data.value[0]
    }
  }
)
getPlaceList()
</script>

<style scoped lang="scss"></style>
