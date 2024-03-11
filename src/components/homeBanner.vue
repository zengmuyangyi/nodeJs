<template>
  <div class="w-full h-245 bannerBox">
    <div class="w-1000 h-full mx-auto">
      <a-carousel :auto-play="true" animation-name="fade" show-arrow="never" class="w-full h-full">
        <a-carousel-item v-for="(item, index) in loopImages.value" :key="index">
          <img :src="getText(item.image)" alt="盐城龙冈桃花源的轮播图" class="w-full h-full" />
        </a-carousel-item>
      </a-carousel>
    </div>
  </div>
</template>

<script setup>
import { getText } from '@/service/until'
import { useApp } from '@/stores'
const { loopImages } = useApp()
</script>

<style scoped lang="scss">
.bannerBox {
  background-image: url('@/static/home/11.jpg');
  background-size: 100% 100%;
}
:deep .arco-carousel-indicator-wrapper-bottom {
  opacity: 0;
}
</style>
