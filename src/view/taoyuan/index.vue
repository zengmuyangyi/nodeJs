<template>
  <!-- <div class="w-1000 mx-auto my-25 flex">
    <div class="w-134 flex-shrink-0">
      <img src="@/static/introduction/n1.png" alt="" />
      <p class="font-bold text-18 text-#1e9145 bg-#dfebd7 text-center leading-40">
        {{ $t('Scenic') }}
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
          <h2 class="text-25 font-bold text-#304f8a">{{ $t('Scenic') }}</h2>
          <div class="text-12 text-#ff7e00 my-5 leading-24 font-bold">
            <img src="@/static/introduction/n2.png" alt="" />&nbsp;&nbsp;{{
              $t('YourPosition')
            }}&nbsp;&nbsp;{{ $t('HomeTwo') }}&nbsp;&nbsp;>>{{ $t('Scenic') }}
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
import { fetchNewsType } from '@/api/scenic'
import $t from '@/service/i18n'
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
  menuId.value = menuList.value.find((item) => item.templateCode === 'taoyuancity')
  fetchNewsType(menuId.value.id).then(
    (res) => {
      tabData.value = res.list
      currentTab.value = res.list[0]
      console.log('%c [ 桃园类型 ]-06', 'font-size:13px; background:pink; color:#bf2c9f;', res)
      if (!route.query.id) {
        router.replace({
          name: 'taoyuanList',
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
    name: 'taoyuanList',
    query: {
      typeId: currentTab.value?.id,
      menuId: menuId.value?.id,
    },
  })
}
watch(
  () => route.path,
  (newVal, oldVal) => {
    if (route.path === '/taoyuan') {
      console.log('$$$', menuId.value.id)
      router.push({
        name: 'taoyuanList',
        query: {
          typeId: currentTab.value?.id,
          menuId: menuId.value.id,
        },
      })
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
