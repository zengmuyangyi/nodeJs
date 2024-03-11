<template>
  <div class="w-full h-450 bg-#3f3f3f pt-70 box-border text-white">
    <div class="w-1200 mx-auto">
      <div class="w-full flex justify-between items-center">
        <div v-for="(item, index) in navData" :key="index" class="flex items-center">
          <div v-if="index" class="w-1 h-14 bg-white mr-48"></div>
          <div
            class="text-18 leaing-25 font-600 cursor-pointer"
            v-html="item.title"
            @click="goPage(item)"
          ></div>
        </div>
      </div>
      <div class="mt-75 flex">
        <div class="flex-1 flex flex-wrap">
          <div class="w-65%">
            <div class="text-16 leading-22 h-44 mr-70">
              {{ $t('Address') + getText(currentScenic.value?.address) }}
            </div>
            <div class="text-16 leading-22 h-44 mr-70">
              {{ $t('ServiceTime') + currentScenic.value?.openTime }}
            </div>
            <div class="text-16 leading-22 mr-70 h-44">
              {{ $t('Copyright') }}
            </div>
            <div class="text-16 leading-22 mr-70 h-44">{{ $t('RecordNumber') }}</div>
          </div>
          <div class="w-35%">
            <div class="text-16 leading-22 h-44 mr-70">
              {{ $t('AdviceTel') + currentScenic.value?.phone }}
            </div>
            <!-- <div class="text-16 leading-22 h-44 mr-70">
              {{ $t('CustomerTel') + currentScenic.value?.phone }}
            </div> -->
            <div class="text-16 leading-22 h-44 mr-70">
              {{ $t('Complaints') + currentScenic.value?.complainPhone }}
            </div>
            <div class="text-16 leading-22 h-44 mr-70">
              {{ $t('Rescue') + currentScenic.value?.policePhone }}
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 flex flex-col items-center w-230">
          <div class="w-120 h-120 bg-white">
            <img
              :src="currentScenic.value?.gzCode"
              class="w-full h-full"
              alt="丰县刘邦故里微信公众号"
            />
          </div>
          <div class="mt-17 text-16 leading-22 font-600 text-center">{{ $t('WeChat') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApp } from '@/stores'
import $t from '@/service/i18n'
import { useRouter } from 'vue-router'
import { getText } from '@/untils'
const router = useRouter()
const { currentScenic } = useApp()
const navData = computed(() => {
  return [
    {
      title: $t('Home'),
      url: '/',
    },
    {
      title: $t('Introduction'),
      url: '/introduction',
    },
    {
      title: $t('News'),
      url: '/news',
    },
    {
      title: $t('VR'),
      href: currentScenic.value?.panoramic,
    },
    {
      title: $t('Book'),
      url: '/reserve',
    },
    {
      title: $t('Guide'),
      url: '/travelGuide',
    },
    {
      title: $t('Culture'),
    },
    {
      title: $t('ContactUs'),
      url: '/aboutUs',
    },
  ]
})
const goPage = (item) => {
  if (item.url) {
    router.push({
      path: item.url,
    })
  } else if (item.href) {
    window.open(item.href)
  }
}
</script>

<style scoped lang="scss"></style>
