<template>
  <div class="w-full h-740">
    <a-carousel
      class="w-full h-full"
      :auto-play="{ interval: 8000, hoverToPause: true }"
      indicator-type="dot"
      :move-speed="3000"
      show-arrow="hover"
    >
      <a-carousel-item v-for="(item, index) in loopImages.value" :key="index">
        <div
          class="w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${getText(item.image)})` }"
        ></div>
        <!-- <img :src="getText(item.image)" alt="丰县刘邦故里的轮播图" class="w-full h-full" /> -->
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<script setup>
import { getText } from '@/service/until'
import { useApp } from '@/stores'
const { loopImages } = useApp()
</script>

<style scoped lang="scss">
:deep .arco-carousel-indicator-wrapper {
  opacity: 1 !important;
  .arco-carousel-indicator-bottom {
    bottom: 34px;
  }
  .arco-carousel-indicator-item {
    width: 28px;
    height: 38px;
    background-color: transparent;
    background-image: url('@/static/home/banner-dot.png');
  }
  .arco-carousel-indicator-item-active {
    background-image: url('@/static/home/banner-dot-active.png');
    background-color: transparent;
  }
  .arco-carousel-indicator-dot .arco-carousel-indicator-item:not(:last-child) {
    margin-right: 27px;
  }
}
</style>
