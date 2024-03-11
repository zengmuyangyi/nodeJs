<template>
  <div class="fixed top-0 left-0 right-0 z-999">
    <div
      :class="isLarge ? 'h-117 bg-opacity-60' : 'h-70 bg-opacity-100'"
      class="w-full bg-black transition-all duration-1500"
    >
      <div
        class="w-1200 h-full mx-auto flex pt-25 box-border justify-between items-center text-white"
      >
        <div
          :class="isLarge ? 'w-100 h-60' : 'w-60 h-40'"
          class="flex-shrink-0 transition-all duration-1500 mb-20"
        >
          <img :src="currentScenic.value?.logo" class="w-full h-full" alt="丰县刘邦故里的logo" />
        </div>
        <div
          :class="isLarge ? '' : 'translate-y--20'"
          class="h-full flex flex-col justify-between items-end transition-all duration-1500"
        >
          <div
            :class="isLarge ? '' : 'opacity-0'"
            class="flex items-center justify-between text-14 w-full"
          >
            <div class="flex items-center">
              <div>{{ $t('Instantaneous') + enter + $t('People') }}</div>
              <div class="ml-10">
                {{ $t('RealTime') + (enter - exit > 10 ? enter - exit : 10) + $t('People') }}
              </div>
              <div class="ml-10">{{ $t('Maximum') + 30000 + $t('People') }}</div>
            </div>
            <div class="flex items-center">
              <div class="w-30 h-22 cursor-pointer" @click="goWeather">
                <img src="@/static/home/weather.png" class="w-full h-full" alt="刘邦故里天气" />
              </div>
              <div class="ml-6">{{ $t('Fengxian') }}</div>
              <div class="ml-10">
                {{
                  getText(weatherInfo.value?.tempMin) + '~' + getText(weatherInfo.value?.tempMax)
                }}℃
              </div>
              <div class="ml-10">{{ getText(weatherInfo.value?.textDay) }}</div>
            </div>
          </div>
          <div class="text-18 h-50 flex items-center">
            <div
              class="h-full box-border relative cursor-pointer flex items-center menuItem"
              v-for="(item, index) in navData"
              :key="index"
              @click="goPage(item, index)"
            >
              <div
                class="cursor-pointer relative"
                :class="index + 1 === navData.length ? 'mr-0' : 'mr-32'"
              >
                <div v-html="item.title"></div>
                <div
                  v-show="currentMenu === index"
                  class="w-full h-4 bg-#aa272e absolute bottom--15"
                ></div>
              </div>
              <div
                class="w-170 absolute px-17 box-border bg-black bg-opacity-60 top-50 left-0 transition-all duration-500 item-second-Menu"
              >
                <div
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                  class="leading-60 text-16 transition-all duration-500 truncate"
                  @click.stop="goPage(item, index, child)"
                >
                  {{ getText(child.title) || getText(child.name) }}
                </div>
              </div>
            </div>
            <div v-show="isLarge" class="h-full flex items-center">
              <div
                class="px-14 h-32 ml-52 bg-#aa272e text-center text-14 leading-32 cursor-pointer"
                @click="changeLanguage"
              >
                {{ $t('SwitchLanguage') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userLogin, fetchFlow } from '@/api/zk'
import { useApp } from '@/stores'
import $t from '@/service/i18n'
import { useRouter, useRoute } from 'vue-router'
import { getText, getWeek } from '@/service/until'
const enter = ref(0)
const exit = ref(0)
userLogin().then((res) => {
  window.localStorage.setItem('token', res.data.token)
  getFlow()
})
const getFlow = async () => {
  const timeRes = new Date()
  const dateTime =
    timeRes.getFullYear() +
    '-' +
    (timeRes.getMonth() + 1 < 10 ? '0' + (timeRes.getMonth() + 1) : timeRes.getMonth() + 1) +
    '-' +
    (timeRes.getDate() < 10 ? '0' + timeRes.getDate() : timeRes.getDate())
  const res = await fetchFlow({
    startTime: `${dateTime} 00`,
    endTime: `${dateTime} 23`,
  })
  enter.value = res.data.list[0]?.enter
  exit.value = res.data.list[0]?.exit
  console.log('&&&&', res)
}
const router = useRouter()
const route = useRoute()
const {
  setLanguage,
  currentScenic,
  weatherInfo,
  language,
  introductionList,
  newsTypeList,
  guideTypeList,
} = useApp()
const changeLanguage = () => {
  setLanguage()
}
const navData = computed(() => {
  return [
    {
      title: $t('Home'),
      url: '/home',
    },
    {
      title: $t('Introduction'),
      url: '/introduction',
      children: introductionList.value,
    },
    {
      title: $t('News'),
      url: '/news',
      children: newsTypeList.value,
    },
    {
      title: $t('VR'),
      href: currentScenic.value?.panoramic,
    },
    {
      title: $t('Book'),
      url: '/reserve',
      // children: [
      //   {
      //     id: 1,
      //     title: {
      //       cn: '票务预定',
      //       en: 'Ticket',
      //     },
      //   },
      //   {
      //     id: 2,
      //     title: {
      //       cn: '酒店预定',
      //       en: 'Hotel',
      //     },
      //   },
      // ],
    },
    {
      title: $t('Guide'),
      url: '/travelGuide',
      children: guideTypeList.value,
    },
    {
      title: $t('Culture'),
      // href: 'https://hotels.ctrip.com/hotels/list?city=1200&landmark=35668077#ctm_ref=www_hp_bs_lst',
      url: '/shopping',
    },
    {
      title: $t('ContactUs'),
      url: '/aboutUs',
    },
    {
      title: 'threeJs',
      url: '/threeJs',
    },
  ]
})
const currentMenu = ref(0)
const goPage = (item, index, child) => {
  currentMenu.value = index
  if (item.url) {
    router.push({
      path: item.url,
      query: {
        id: child?.id,
        typeId: child?.id,
      },
    })
  } else if (item.href) {
    window.open(item.href)
  }
}
watch(
  () => route.path,
  (newVal, oldVal) => {
    if (newVal.indexOf('news') > -1) {
      currentMenu.value = 2
    } else if (newVal.indexOf('guide') > -1) {
      currentMenu.value = 5
    } else {
      navData.value.forEach((item, index) => {
        if (item.url === newVal) {
          currentMenu.value = index
        }
      })
    }
  }
)
const isLarge = ref(true)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
const handleScroll = (e) => {
  if (document.documentElement.scrollTop >= 800) {
    isLarge.value = false
  } else {
    isLarge.value = true
  }
}
const goWeather = () => {
  window.open('https://www.tianqi.com/fengxian2/')
}
</script>

<style scoped lang="scss">
.item-second-Menu {
  height: 0px;
  div {
    opacity: 0;
    height: 0;
  }
}
.menuItem:hover {
  .item-second-Menu {
    height: auto;
    div {
      opacity: 100;
      height: 60px;
    }
  }
}
</style>
