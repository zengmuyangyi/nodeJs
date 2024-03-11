<template>
  <div class="w-full relative">
    <Header v-show="!isLogin"></Header>
    <ToTop></ToTop>
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <Footer v-show="!isLogin"></Footer>
  </div>
  <!-- <Test></Test> -->
</template>

<script setup>
import { useApp } from './stores'
import { RouterView, useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const isLogin = ref(false)
const { initData } = useApp()
initData()
router.push({
  path: '/',
})
watch(
  () => route.path,
  (newVal, oldVal) => {
    document.documentElement.scrollTop = 0
  }
)
</script>
<style lang="scss">
@import url(@/assets/siyuan_st.css);
@import url(@/assets/qiantu.css);
.yahei {
  font-family: 'Microsoft Yahei';
}
.siyuan_st {
  font-family: 'siyuan_st';
}
.qiantu {
  font-family: 'qiantu';
}
.common-bg {
  background-image: url('@/static/ui/common-bg.png');
  background-size: 100% 428px;
  background-position: bottom;
}
.arco-pagination-item-active {
  color: #3a3a3a !important;
  background-color: #c9cdd4 !important;
}
.arco-pagination-item {
  color: #3a3a3a;
}
</style>
