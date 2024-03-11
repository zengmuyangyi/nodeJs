import { defineStore } from 'pinia'
import { fetchCurrentScenic, fetchScenicType } from '@/api/home'
import {
  fetchLoopImages,
  fetchMenuList,
  fetchWeather,
  fetchPlaceList,
  fetchNewsType,
} from '@/api/scenic'
import { logout } from '@/api/user'
import { parseImage } from '@/untils'
import { reactive } from 'vue'
import { Notification } from '@arco-design/web-vue'
import { useRouter } from 'vue-router'

export const useApp = defineStore('map', () => {
  const language = ref('cn')
  const currentKey = ref('')
  const scenic = ref({})
  const isLogin = ref(false)
  const userInfo = ref({})
  const router = useRouter()

  const logoutInfo = () => {
    logout().then((res) => {
      window.localStorage.removeItem('tToken')
      window.localStorage.removeItem('userAuths')
      Notification.success({
        content: '登出成功',
        position: 'topRight',
      })
      setTimeout(() => {
        window.location.reload()
      }, 500)
    })
  }

  function setLanguage(str) {
    if (language.value === 'cn') {
      language.value = 'en'
    } else {
      language.value = 'cn'
    }
    console.log('language', language)
  }

  function setMenu(str) {
    currentKey.value = str
  }

  // ---------------------------景区信息-----------------------------------
  const currentScenic = reactive({})
  const getCurrentScenic = async () => {
    const res = await fetchCurrentScenic()
    currentScenic.value = res.list?.[0] || {}
    if (currentScenic.value.images) {
      parseImage(currentScenic.value.images)
    }
    console.log(
      '%c [ 景区信息 ]-49',
      'font-size:13px; background:pink; color:#bf2c9f;',
      currentScenic.value
    )
  }

  //  ------------------------POI分类------------------------------
  const POIType = reactive([])
  const getPOIType = async () => {
    const params = {
      pageSize: 0,
      pageNum: 0,
      status: 1,
    }
    const res = await fetchScenicType(params)
    POIType.value = res.list
    console.log('%c [ POI类型 ]-50', 'font-size:13px; background:pink; color:#bf2c9f;', res)
  }

  // -------------------------图片轮播----------------------------------
  const loopImages = reactive([])
  const getLoopImages = async () => {
    const params = {
      pageNum: 0,
      pageSize: 0,
    }
    const res = await fetchLoopImages(params)
    loopImages.value = res.list
    console.log('%c [ 轮播图片 ]-03', 'font-size:13px; background:pink; color:#bf2c9f;', res)
  }

  // -------------------------获取菜单列表----------------------------
  const menuList = reactive([])
  const getMenuList = async () => {
    const res = await fetchMenuList()
    menuList.value = res.list
    console.log('%c [ 菜单列表 ]-04', 'font-size:13px; background:pink; color:#bf2c9f;', res)
  }

  // -----------------------获取天气------------------------------
  const weatherInfo = reactive({})
  const getWeather = async () => {
    const location = currentScenic.value?.lng + ',' + currentScenic.value?.lat
    const res = await fetchWeather(location, 'zh')
    const enRes = await fetchWeather(location, 'en')
    const keys = Object.keys(res.daily[0])
    weatherInfo.value = res.daily[0]
    keys.forEach((key) => {
      weatherInfo.value[key] = {
        cn: res.daily[0][key],
        en: enRes.daily[0][key],
      }
    })
    console.log('***', weatherInfo)
    console.log('%c [ 天气信息 ]-05', 'font-size:13px; background:pink; color:#bf2c9f;', enRes)
  }
  // -------------------------获取景区介绍------------------------------
  const introductionList = reactive([])
  const getPlaceList = () => {
    const menuId = menuList.value?.find((item) => item.templateCode === 'place')
    const params = {
      pageSize: 0,
      pageNum: 0,
      status: 1,
      menuId: menuId?.id,
    }
    fetchPlaceList(params).then(
      (res) => {
        introductionList.value = res.list
        console.log(
          console.log('%c [ 介绍列表 ]-06', 'font-size:13px; background:pink; color:#bf2c9f;', res)
        )
      },
      (err) => {
        console.log('***', err)
      }
    )
  }
  // ------------------------获取新闻类型------------------------
  const newsTypeList = reactive([])
  const getNewsType = () => {
    const menuId = menuList.value?.find((item) => item.templateCode === 'news')
    fetchNewsType(menuId?.id).then(
      (res) => {
        newsTypeList.value = res.list
        console.log('%c [ 新闻类型 ]-07', 'font-size:13px; background:pink; color:#bf2c9f;', res)
      },
      (err) => {
        console.log('$$$', err)
      }
    )
  }
  // ----------------------获取游客指南类型---------------------
  const guideTypeList = reactive([])
  const getGuideType = () => {
    const menuId = menuList.value?.find((item) => item.templateCode === 'guide')
    fetchNewsType(menuId?.id).then(
      (res) => {
        guideTypeList.value = res.list
        console.log('%c [ 指南类型 ]-08', 'font-size:13px; background:pink; color:#bf2c9f;', res)
      },
      (err) => {
        console.log('$$$', err)
      }
    )
  }

  const initData = async () => {
    const tToken = window.localStorage.getItem('tToken')
    if (tToken) {
      isLogin.value = true
      userInfo.value = JSON.parse(window.localStorage.getItem('userAuths'))
    }
    await getCurrentScenic()
    await getMenuList()

    getPOIType()
    getLoopImages()
    getWeather()
    getPlaceList()
    getNewsType()
    getGuideType()
  }

  return {
    language,
    setLanguage,
    setMenu,
    currentKey,
    scenic,
    initData,
    currentScenic,
    POIType,
    loopImages,
    menuList,
    weatherInfo,
    isLogin,
    userInfo,
    logoutInfo,
    introductionList,
    newsTypeList,
    guideTypeList,
  }
})
