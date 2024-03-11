# 高德地图
https://lbs.amap.com/api/jsapi-v2/summary/

# pc模板
vite+vue3+unocss

# vue\vue-router\vant 全自动按需导入
无需import语句，自动导入所需模块

demo
``` vue
<template>
  <main class="w-375"><van-button type="primary">主要按钮</van-button></main>
</template>

<script setup>
const a = ref('1231231')
</script>

```
# unocss
https://github.com/unocss/unocss

# 图标库
https://icones.js.org/collection/ic

## 使用: 安装对应图标库 
如url 结尾为ic,则对于图标库为 `@iconify-json/ic`

页面中使用对应图标


``` html
<span class="ic-baseline-access-time-filled"></span>
```

图标默认样式配置见 unocss.config.js