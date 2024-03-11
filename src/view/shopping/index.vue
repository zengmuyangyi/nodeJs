<template>
  <div class="w-full">
    <div class="w-full h-428 shopping-bg"></div>
    <div class="w-full bg-white">
      <div class="w-1200 mx-auto bg-white pt-40 box-border relative">
        <div class="bg-black bg-opacity-50 p-10 box-border absolute top--80">
          <div
            class="w-full h-full border-3 border-white py-20 px-36 text-white text-28 leading-40 font-600"
          >
            {{ $t('Culture') }}
          </div>
        </div>
        <div class="flex items-center">
          <img src="@/static/ui/icon.png" class="w-20 h-20" alt="" />
          <div class="ml-9 text-14 leading-20 font-600 text-#3a3a3a">
            {{ $t('YourPosition') }}&nbsp;{{ $t('HomeTwo') }}&nbsp;&nbsp;>>&nbsp;&nbsp;<span
              class="text-14 leading-20 font-600 text-#000"
              >{{ $t('Culture') }}</span
            >
          </div>
        </div>
      </div>
      <div class="w-full bg-white mt-10 pt-42 pb-58">
        <div class="w-1200 mx-auto flex justify-between items-end">
          <div class="w-760">
            <div class="text-22 leading-30 font-600">{{ $t('CultureIntroduction') }}</div>
            <div class="text-16 leading-32 text-#999 mt-22">{{ $t('HourlyRoomDes') }}</div>
            <div class="mt-114 w-full flex justify-end items-center">
              <div class="text-18 font-600 leading-25 mr-14">{{ $t('ScanForCulture') }}</div>
              <div class="text-18 font-600 leading-25">→</div>
            </div>
          </div>
          <div class="w-153 h-153 bg-gray-300 flex justify-center items-center">
            <img src="@/static/shoppingMall.jpg" class="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import $t from '@/service/i18n'
import { getText } from '@/service/until'
</script>

<style scoped lang="scss">
.shopping-bg {
  background-image: url('@/static/ui/shopping-bg.png');
  background-size: 100% 100%;
}
</style>
