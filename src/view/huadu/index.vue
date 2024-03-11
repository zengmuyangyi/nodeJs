<template>
  <div class="w-full">
    <div class="w-full h-300 common-bg"></div>
    <div
      class="w-1200 mx-auto bg-white rounded-10 translate-y--55 py-30 px-54 box-border relative overflow-hidden"
    >
      <img src="@/static/ui/contentBg.png" class="w-586 h-386 absolute top-0 right-0 z--1" alt="" />
      <div class="flex items-center">
        <img src="@/static/ui/icon.png" class="w-20 h-20" alt="" />
        <div class="ml-9 text-14 leading-20 font-600 text-#3a3a3a">
          您现在的位置：&nbsp;首页&nbsp;&nbsp;>>&nbsp;&nbsp;走进园区&nbsp;&nbsp;>>&nbsp;&nbsp;<span
            class="text-14 leading-20 font-600 text-#84a44b"
            >{{ getText(currentTab.value?.name) }}</span
          >
        </div>
      </div>
      <div class="mt-38 text-22 leading-30 font-400">走进园区</div>
      <div class="flex items-center mt-17 flex-wrap">
        <div
          v-for="item in tabData.value"
          :key="item.id"
          class="px-20 py-10 text-16 font-400 leading-22 rounded-18 mr-16 cursor-pointer"
          :style="{
            backgroundColor: currentTab.value?.id === item.id ? '#84A44B' : '#eaeaea',
            color: currentTab.value?.id === item.id ? '#fff' : '#3a3a3a',
          }"
          @click="changeInfo(item)"
        >
          {{ getText(item.name) }}
        </div>
      </div>
      <div class="flex justify-between mt-40">
        <!-- <div class="flex-1" v-html="getText(currentData.value?.introduction)"></div>
        <video
          v-show="currentData.value?.booking_information"
          :src="currentData.value?.booking_information"
          controls
          class="w-full h-500"
        ></video> -->
        <img src="@/static/ui/common-title.png" alt="盐城龙冈桃花源" class="w-4 h-568 ml-42" />
        <div class="w-32 text-30 ml-15 qiantu">{{ getText(currentTab.value?.name) }}</div>
      </div>
    </div>
  </div>
  <!-- <div class="w-1000 mx-auto my-25 flex">
    <div class="w-134 flex-shrink-0">
      <img src="@/static/introduction/n1.png" alt="" />
      <p class="font-bold text-18 text-#1e9145 bg-#dfebd7 text-center leading-40">
        {{ $t('HuaduCulture') }}
      </p>
      <div class="bg-#effbe7">
        <div
          class="text-center text-14 leading-40 text-#2ba444 border-b-1 border-b-solid border-b-white"
        >
          <div
            v-for="item in tabData.value"
            :key="item.id"
            :style="{ color: currentTab.value.id === item.id ? '#f00' : '#333' }"
            @click="changeInfo(item)"
            class="cursor-pointer tab-item"
          >
            {{ getText(item.name) }}
          </div>
        </div>
      </div>
    </div>
    <div class="mx-15 flex-1">
      <div class="w-full h-65 pb-25 box-content border-b-1 border-b-dashed border-b-#676767 flex">
        <div class="w-60 h-65 bg-#ff8400 flex justify-center items-center flex-shrink-0">
          <img src="@/static/introduction/n8.png" class="w-45 h-45" alt="" />
        </div>
        <div class="flex-1 h-65 ml-15">
          <h2 class="text-25 font-bold text-#304f8a">{{ $t('HuaduCulture') }}</h2>
          <div class="text-12 text-#ff7e00 my-5 leading-24 font-bold">
            <img src="@/static/introduction/n2.png" alt="" />&nbsp;&nbsp;{{
              $t('YourPosition')
            }}&nbsp;&nbsp; {{ $t('HomeTwo') }} &nbsp;&nbsp;>>{{
              $t('HuaduCulture')
            }}&nbsp;&nbsp;>>&nbsp;&nbsp;{{ getText(currentTab.value?.name) }}
          </div>
        </div>
      </div>
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <div class="w-148 flex-shrink-0">
      <Side></Side>
    </div>
  </div> -->
</template>

<script setup>
import $t from '@/service/i18n'
import { fetchNewsType } from '@/api/scenic'
import { useApp } from '@/stores'
import { getText } from '@/untils'
import { reactive } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
const { menuList } = useApp()
const tabData = reactive([])
const currentTab = reactive([])
const router = useRouter()
const route = useRoute()
const menuId = reactive({})
const getNewsType = () => {
  menuId.value = menuList.value.find((item) => item.templateCode === 'huadu')
  fetchNewsType(menuId.value.id).then(
    (res) => {
      tabData.value = res.list
      if (route.query.typeId) {
        currentTab.value = res.list.find((item) => item.id === route.query.typeId - 0)
      } else {
        currentTab.value = res.list[0]
      }
      if (!route.query.id) {
        router.replace({
          name: 'huaduList',
          query: {
            typeId: currentTab.value?.id,
            menuId: menuId.value?.id,
          },
        })
      }
    },
    (err) => {
      console.log('$$$', err)
    }
  )
}
const changeInfo = (item) => {
  currentTab.value = item
  router.push({
    name: 'huaduList',
    query: {
      typeId: currentTab.value.id,
      menuId: menuId.value?.id,
    },
  })
}
watch(
  () => route.path,
  (newVal, oldVal) => {
    if (newVal === '/huaduList' && route.query.typeId) {
      currentTab.value = tabData.value.find((item) => item.id === route.query.typeId - 0)
    }
  }
)
getNewsType()
</script>

<style scoped lang="scss">
.tab-item:hover {
  color: #004a7c !important;
}
</style>
