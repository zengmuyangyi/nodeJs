<template>
  <div class="absolute w-70 right--90 top-127">
    <div
      class="w-70 h-70 bg-#000 bg-opacity-30 flex flex-col justify-center items-center cursor-pointer mb-10"
    >
      <img src="@/static/ui/common-service.png" class="w-35 h-35" alt="" />
      <div class="text-14 text-white leading-20 font-400 mt-3">在线客服</div>
    </div>
    <div
      class="w-70 h-70 bg-#000 bg-opacity-30 flex flex-col justify-center items-center cursor-pointer mb-10"
    >
      <img src="@/static/ui/common-contact.png" class="w-35 h-35" alt="" />
      <div class="text-14 text-white leading-20 font-400 mt-3">联系我们</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const openQQ = () => {
  window.open('tencent://message/?uin=851495453&Site=let-net.com&Menu=yes', '_blank')
}
const goAboutUs = () => {
  router.push({
    name: 'aboutUs',
  })
}
</script>
