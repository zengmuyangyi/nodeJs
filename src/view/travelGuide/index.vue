<template>
  <div class="w-full">
    <div class="w-full h-428 guide-bg"></div>
    <div class="w-1200 mx-auto bg-white py-40 box-border relative">
      <div class="bg-black bg-opacity-50 p-10 box-border absolute top--80">
        <div
          class="w-full h-full border-3 border-white py-20 px-36 text-white text-28 leading-40 font-600"
        >
          {{ getText(currentTab.value?.name) }}
        </div>
      </div>
      <div class="flex items-center">
        <img src="@/static/ui/icon.png" class="w-20 h-20" alt="" />
        <div class="ml-9 text-14 leading-20 font-600 text-#3a3a3a">
          {{ $t('YourPosition') }}&nbsp;{{ $t('HomeTwo') }}&nbsp;&nbsp;>>&nbsp;&nbsp;{{
            $t('Guide')
          }}&nbsp;&nbsp;>>&nbsp;&nbsp;<span class="text-14 leading-20 font-600 text-#000">{{
            getText(currentTab.value?.name)
          }}</span>
        </div>
      </div>
      <div class="mt-38 text-22 leading-30 font-600">{{ $t('Guide') }}</div>
      <div class="flex items-center mt-17 flex-wrap">
        <div
          v-for="item in guideTypeList.value"
          :key="item.id"
          class="px-20 py-10 text-16 font-400 leading-22 rounded-18 mr-16 cursor-pointer"
          :style="{
            backgroundColor: currentTab.value?.id === item.id ? '#000' : '#eaeaea',
            color: currentTab.value?.id === item.id ? '#fff' : '#3a3a3a',
          }"
          @click="changeInfo(item)"
        >
          {{ getText(item.name) }}
        </div>
      </div>
      <div class="flex justify-between mt-40">
        <div class="flex-1">
          <router-view v-slot="{ Component }">
            <transition>
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
        <!-- <img src="@/static/ui/common-title.png" alt="盐城龙冈桃花源" class="w-4 h-568 ml-42" />
        <div class="w-32 text-30 ml-15 qiantu">{{ getText(currentTab.value?.name) }}</div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import $t from '@/service/i18n'
import { useApp } from '@/stores'
import { getText } from '@/untils'
import { RouterView, useRoute, useRouter } from 'vue-router'
const { guideTypeList, menuList } = useApp()
const route = useRoute()
const router = useRouter()
const currentTab = reactive([])
const menuId = reactive({})
if (route.query.typeId) {
  currentTab.value = guideTypeList.value.find((item) => item.id === route.query.typeId - 0)
} else {
  currentTab.value = guideTypeList.value[0]
}
menuId.value = menuList.value.find((item) => item.templateCode === 'guide')
const changeInfo = (item) => {
  currentTab.value = item
  router.push({
    name: 'guideList',
    query: {
      typeId: currentTab.value.id,
      menuId: menuId.value.id,
    },
  })
}
watch(
  () => route.query.typeId,
  (newVal, oldVal) => {
    if (newVal) {
      currentTab.value = guideTypeList.value.find((item) => item.id === newVal - 0)
    } else {
      currentTab.value = guideTypeList.value[0]
    }
  }
)
</script>

<style scoped lang="scss">
.guide-bg {
  background-image: url('@/static/ui/guide-bg.png');
  background-size: 100% 100%;
}
</style>
