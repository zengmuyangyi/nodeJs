<template>
  <div
    :class="isOpacity ? 'opacity-0 pointer-events-none' : 'pointer-events-auto'"
    class="w-50 h-50 bg-black bg-opacity-30 fixed flex justify-center items-center text-white right-5% cursor-pointer bottom-10% duration-500 transition-all z-999"
    @click="backTop"
  >
    <div class="ic-twotone-keyboard-capslock w-40 h-40"></div>
  </div>
</template>

<script setup>
const isOpacity = ref(true)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
const handleScroll = (e) => {
  if (document.documentElement.scrollTop >= 500 && isOpacity) {
    isOpacity.value = false
  } else {
    isOpacity.value = true
  }
}
const backTop = () => {
  let top = document.documentElement.scrollTop //获取点击时页面的滚动条纵坐标位置
  const timeTop = setInterval(() => {
    document.documentElement.scrollTop = top -= 50 //一次减50往上滑动
    if (top <= 0) {
      clearInterval(timeTop)
    }
  }, 5) //定时调用函数使其更顺滑
}
</script>
