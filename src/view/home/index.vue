<template>
  <div class="w-full">
    <!-- 轮播图 -->
    <homeBanner></homeBanner>
    <!-- 新闻资讯 -->
    <div
      class="w-full transition-all duration-2000 mt-30 mb-85"
      ref="newsBox"
      :class="isNewsOpcity ? 'opacity-0' : ''"
    >
      <div class="w-1200 mx-auto">
        <div class="w-full text-end font-bold text-40 siyuan_st">
          <span class="text-66 font-bold siyuan_st">新</span>闻资讯
        </div>
        <div class="w-full text-end text-30 text-#6a6a6a font-bold siyuan_st">NEWS</div>
        <div class="mt-40 flex items-center justify-between overflow-hidden">
          <div
            class="w-518 h-358 transition-all duration-1500"
            :class="isNewsOpcity ? 'translate-x--518' : ''"
          >
            <a-carousel
              class="w-full h-full"
              :auto-play="true"
              indicator-type="dot"
              show-arrow="hover"
            >
              <a-carousel-item
                v-for="item in newsBanner.value"
                :key="item.id"
                @click="goDetail('newsDetail', item)"
              >
                <div @click="goDetail(item)" class="w-full h-full relative cursor-pointer">
                  <img
                    :src="getText(item.coverImage)"
                    class="w-full h-full"
                    alt="丰县刘邦故里的资讯轮播"
                  />
                  <div
                    class="absolute w-full h-66 text-white text-18 left-0 bottom-0 bg-black bg-opacity-60 leading-66 px-25 truncate"
                  >
                    {{ getText(item.title) }}
                  </div>
                </div>
              </a-carousel-item>
            </a-carousel>
          </div>
          <div
            class="flex-1 transition-all duration-1500 h-370"
            :class="isNewsOpcity ? 'translate-x-800' : ''"
          >
            <div class="ml-60 text-22 font-600 leading-30">
              {{ getText(currentScenic.value?.name) }}
            </div>
            <div class="ml-84 flex flex-col text-18">
              <div class="font-600 indent-3em leading-25 mt-7 mb-18 u-line-2">
                {{ getText(currentScenic.value?.description) }}
              </div>
              <div
                v-for="item in newsBanner.value"
                :key="item.id"
                @click="goDetail('newsDetail', item)"
                class="flex items-center mb-12 cursor-pointer"
              >
                <div class="w-4 h-4 rounded-full bg-#3e3e3e"></div>
                <div class="font-400 text-#3e3e3e leading-25 ml-10 flex-1 truncate newsItem">
                  {{ getText(item.title) }}
                </div>
                <div class="text-#ababab font-400 leading-25 ml-10">{{ item.publishTime }}</div>
              </div>
              <div
                class="py-14 px-32 w-140 border-2 border-solid box-border mt-5 relative cursor-pointer overflow-hidden flex items-center justify-between moreBox"
                @click="goMore('/news', false)"
              >
                <div class="leading-28 text-20">{{ $t('More') }}</div>

                <div class="w-20 h-17">
                  <img src="@/static/home/more.png" alt="" />
                </div>
                <div
                  class="absolute h-full top-50% left-50% translate-x--50% translate-y--50% bg-opacity-40 rounded-full moreBg"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 景区介绍 -->
    <div
      class="w-full h-900 transition-all duration-2000 overflow-hidden scenicBg"
      ref="introductionBox"
      :class="isIntroductionOpcity ? 'opacity-0' : ''"
    >
      <div class="w-1200 mx-auto pt-66">
        <div class="font-bold text-#fff leading-80 text-40 siyuan_st">
          <span class="text-66 font-bold siyuan_st">景</span>区介绍
        </div>
        <div class="text-white text-24 font-bold leading-30 siyuan_st">ABOUT US</div>
        <div
          class="w-full h-560 bg-white mt-56 box-border px-24 py-40 flex flex-col justify-between items-center transition-all duration-1500"
          :class="isIntroductionOpcity ? 'translate-y-1000' : ''"
        >
          <div class="flex justify-between w-full">
            <div
              v-for="item in introductionData.value"
              :key="item.id"
              class="w-368 cursor-pointer"
              @click="goDetail('introduction', item)"
            >
              <div class="text-20 font-600 leading-28">{{ getText(item.title) }}</div>
              <div class="mt-20 w-368 h-220">
                <img
                  :src="getText(item.coverImage)"
                  class="w-full h-full introduction-img"
                  alt="盐城龙冈桃花源景区介绍的封面"
                />
              </div>
              <div class="text-18 font-400 leading-30 text-#3e3e3e mt-20 u-line-3">
                {{ getText(item.description) }}
              </div>
            </div>
          </div>
          <div
            class="py-14 px-32 w-140 border-2 border-solid box-border mt-5 relative cursor-pointer overflow-hidden flex items-center justify-between moreBox"
            @click="goMore('/introduction', false)"
          >
            <div class="leading-28 text-20">{{ $t('More') }}</div>

            <div class="w-20 h-17">
              <img src="@/static/home/more.png" alt="" />
            </div>
            <div
              class="absolute h-full top-50% left-50% translate-x--50% translate-y--50% bg-opacity-40 rounded-full moreBg"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 餐饮购物 -->
    <div
      ref="shoppingBox"
      class="w-full bg-white h-1050 relative pt-100 transition-all duration-2000 overflow-hidden"
      :class="isShoppingOpacity ? 'opacity-0' : ''"
    >
      <img
        src="@/static/home/food-bg.png"
        alt="丰县刘邦故里"
        class="w-580 h-305 absolute right-0 bottom-0"
      />
      <div class="w-1200 mx-auto">
        <div class="text-40 font-bold leading-80 siyuan_st">
          <span
            class="text-66 font-bold inline-block w-76 h-76 text-white text-center leading-76 siyuan_st shopping-title"
            >特</span
          >色商场
        </div>
        <div class="text-30 leading-36 font-bold text-#6a6a6a siyuan_st">SHOPPING</div>
        <div class="w-full flex justify-between mt-45">
          <img
            src="@/static/home/shopping1.png"
            class="w-710 h-478 transition-all duration-1500"
            :class="isShoppingOpacity ? 'translate-x-1000' : ''"
            alt="丰县刘邦故里"
          />
          <img
            src="@/static/home/shopping2.png"
            class="w-150 h-478 transition-all duration-1500 delay-200"
            :class="isShoppingOpacity ? 'translate-x-1000' : ''"
            alt="丰县刘邦故里"
          />
          <img
            src="@/static/home/shopping3.png"
            class="w-150 h-478 transition-all duration-1500 delay-400"
            :class="isShoppingOpacity ? 'translate-x-1000' : ''"
            alt="丰县刘邦故里"
          />
          <img
            src="@/static/home/shopping4.png"
            class="w-150 h-478 transition-all duration-1500 delay-600"
            :class="isShoppingOpacity ? 'translate-x-1000' : ''"
            alt="丰县刘邦故里"
          />
        </div>
        <div class="mt-56 text-18 text-#3e3e3e leading-33 font-400 text-center u-line-3">
          {{ getText(currentScenic.value?.description) }}
        </div>
        <div class="w-full flex justify-center mt-56">
          <div
            class="py-14 px-32 w-140 border-2 border-solid box-border mt-5 relative cursor-pointer overflow-hidden flex items-center justify-between moreBox"
            @click="goMore('/shopping')"
          >
            <div class="leading-28 text-20">{{ $t('More') }}</div>

            <div class="w-20 h-17">
              <img src="@/static/home/more.png" alt="" />
            </div>
            <div
              class="absolute h-full top-50% left-50% translate-x--50% translate-y--50% bg-opacity-40 rounded-full moreBg"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 虚拟旅游 -->
    <div
      class="w-full h-773 bg-#F5F7F6 pt-70 pb-48 box-border transition-all duration-2000 vrBox"
      ref="vrBox"
      :class="isVROpacity ? 'opacity-0' : ''"
    >
      <div class="w-1200 h-full mx-auto flex flex-col justify-between text-white">
        <div class="w-full flex justify-between">
          <div class="text-40 font-bold w-53 relative siyuan_st">
            <span class="text-66 font-bold siyuan_st">虚</span>拟旅游
            <div
              class="text-30 font-bold write-vertical-right absolute w-36 h-244 text-white top-90 left-48"
            >
              VIRTUAL TOUR
            </div>
          </div>
          <img src="@/static/home/vr1.png" alt="丰县刘邦故里" class="w-350 h-223 mt-70 ml-77" />
          <img src="@/static/home/vr2.png" alt="丰县刘邦故里" class="w-350 h-223 mt-182" />
          <img src="@/static/home/vr3.png" alt="丰县刘邦故里" class="w-350 h-223 mt-182" />
        </div>
        <div class="text-18 text-white leading-33 font-400 text-center u-line-3">
          {{ getText(currentScenic.value?.description) }}
        </div>
        <div class="w-full flex justify-center">
          <div
            class="py-14 px-32 w-140 border-2 border-solid box-border mt-5 relative cursor-pointer overflow-hidden flex items-center justify-between moreBox"
            @click="goMore(currentScenic.value?.panoramic, true)"
          >
            <div class="leading-28 text-20">{{ $t('More') }}</div>

            <div class="w-20 h-17">
              <img src="@/static/home/more-white.png" alt="" />
            </div>
            <div
              class="absolute h-full top-50% left-50% translate-x--50% translate-y--50% bg-opacity-40 rounded-full moreBg"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 游客指南 -->
    <div
      class="w-full h-1083 pb-55 pt-78 box-border transition-all duration-2000 guideBg"
      ref="guideBox"
      :class="isGuideOpacity ? 'opacity-0' : ''"
    >
      <div class="text-40 font-bold text-center siyuan_st">
        <span class="text-66 font-bold relative siyuan_st">游</span>客指南
      </div>
      <div class="text-center text-#6a6a6a text-30 font-bold siyuan_st leading-36">GUIDE</div>
      <div class="w-full h-790 mt-10 overflow-hidden">
        <div class="w-1200 mx-auto pt-55 pb-75 h-full box-border flex justify-between">
          <div
            @click="goGuide(guideTypeList.value[0])"
            class="flex flex-col items-center cursor-pointer guideItem"
          >
            <div class="w-260 h-400">
              <img
                src="@/static/home/guide1.png"
                class="w-full h-full duration-1500 transition-all delay-200"
                :class="isGuideOpacity ? `translate-y-1000` : ``"
                alt="丰县刘邦故里的游客指南封面"
              />
            </div>
            <div class="w-full flex flex-col items-center guideItem-content">
              <div class="mt-62 text-40 font-bold font-400 leading-56 siyuan_st">
                {{ $t('Travels') }}
              </div>
              <div class="mt-20 w-187 text-22 font-400 leading-41 text-center u-line-3">
                <div>{{ $t('InHomeTown') }}</div>
                <div>{{ $t('Obtain') }}</div>
              </div>
            </div>
          </div>
          <div
            @click="goGuide(guideTypeList.value[0])"
            class="flex flex-col items-center cursor-pointer guideItem"
          >
            <div class="w-260 h-400">
              <img
                src="@/static/home/guide2.png"
                class="w-full h-full duration-1500 transition-all delay-400"
                :class="isGuideOpacity ? `translate-y-1000` : ``"
                alt="丰县刘邦故里的游客指南封面"
              />
            </div>
            <div class="w-full flex flex-col items-center guideItem-content">
              <div class="mt-62 text-40 font-bold font-400 leading-56 siyuan_st">
                {{ $t('Strategy') }}
              </div>
              <div class="mt-20 w-187 text-22 font-400 leading-41 text-center u-line-3">
                <div>{{ $t('InHomeTown') }}</div>
                <div>{{ $t('Obtain') }}</div>
              </div>
            </div>
          </div>
          <div
            @click="goGuide(guideTypeList.value[1])"
            class="flex flex-col items-center cursor-pointer guideItem"
          >
            <div class="w-260 h-400">
              <img
                src="@/static/home/guide3.png"
                class="w-full h-full duration-1500 transition-all delay-600"
                :class="isGuideOpacity ? `translate-y-1000` : ``"
                alt="丰县刘邦故里的游客指南封面"
              />
            </div>
            <div class="w-full flex flex-col items-center guideItem-content">
              <div class="mt-62 text-40 font-bold font-400 leading-56 siyuan_st">
                {{ $t('Interaction') }}
              </div>
              <div class="mt-20 w-187 text-22 font-400 leading-41 text-center u-line-3">
                <div>{{ $t('InHomeTown') }}</div>
                <div>{{ $t('Obtain') }}</div>
              </div>
            </div>
          </div>
          <div
            @click="goGuide(guideTypeList.value[1])"
            class="flex flex-col items-center cursor-pointer guideItem"
          >
            <div class="w-260 h-400">
              <img
                src="@/static/home/guide2.png"
                class="w-full h-full duration-1500 transition-all delay-800"
                :class="isGuideOpacity ? `translate-y-1000` : ``"
                alt="丰县刘邦故里的游客指南封面"
              />
            </div>
            <div class="w-full flex flex-col items-center guideItem-content">
              <div class="mt-62 text-40 font-bold font-400 leading-56 siyuan_st">
                {{ $t('Experience') }}
              </div>
              <div class="mt-20 w-187 text-22 font-400 leading-41 text-center u-line-3">
                <div>{{ $t('InHomeTown') }}</div>
                <div>{{ $t('Obtain') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <div
          class="py-14 px-32 w-140 border-2 border-solid box-border mt-5 relative cursor-pointer overflow-hidden flex items-center justify-between moreBox"
          @click="goMore('/travelGuide', false)"
        >
          <div class="leading-28 text-20">{{ $t('More') }}</div>

          <div class="w-20 h-17">
            <img src="@/static/home/more.png" alt="" />
          </div>
          <div
            class="absolute h-full top-50% left-50% translate-x--50% translate-y--50% bg-opacity-40 rounded-full moreBg"
          ></div>
        </div>
      </div>
    </div>
    <!-- 预定服务 -->
    <div
      class="w-full h-756 bg-#f5f7f6 relative py-60 box-border transition-all duration-2000"
      ref="reserveBox"
      :class="isReserveOpacity ? 'opacity-0' : ''"
    >
      <div class="absolute w-390 h-126 right-0 top-126">
        <img src="@/static/home/book1.png" class="w-full h-full" alt="丰县刘邦故里" />
      </div>
      <div class="absolute w-390 h-126 left-0 bottom-113">
        <img src="@/static/home/book2.png" class="w-full h-full" alt="丰县刘邦故里" />
      </div>
      <div class="w-1200 h-full mx-auto flex flex-col justify-between items-center">
        <div class="text-center">
          <div class="text-40 leading-80 font-bold siyuan_st">
            <span class="text-66 leading-80 font-bold siyuan_st">预</span>订服务
          </div>
          <div class="siyuan_st text-30 font-bold text-#6a6a6a leading-36">RESERVE</div>
        </div>
        <div class="w-full">
          <div class="w-full h-150 p-20 box-border cursor-pointer reserveBg">
            <div class="w-full h-full border-1 border-solid border-white relative">
              <div
                class="text-50 font-bold leading-60 text-white absolute left-60 top-18 siyuan_st"
              >
                {{ $t('Understand') }}
              </div>
              <div
                class="text-36 text-white leading-43 font-bold absolute left-180 bottom-16 siyuan_st"
              >
                /&nbsp;&nbsp;{{ $t('Book') }}&nbsp;&nbsp;/
              </div>
            </div>
          </div>
          <div class="text-20 leading-28 font-600 mt-42">{{ $t('UnderstandingReservations') }}</div>
          <div class="text-18 leading-32 text-#3e3e3e mt-13">
            {{ $t('ReserveDetail') }}
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div
            class="py-14 px-32 w-140 border-2 border-solid box-border mt-5 relative cursor-pointer overflow-hidden flex items-center justify-between moreBox"
            @click="goMore('/reserve', false)"
          >
            <div class="leading-28 text-20">{{ $t('More') }}</div>

            <div class="w-20 h-17">
              <img src="@/static/home/more.png" alt="" />
            </div>
            <div
              class="absolute h-full top-50% left-50% translate-x--50% translate-y--50% bg-opacity-40 rounded-full moreBg"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import homeBanner from './components/homeBanner.vue'
import { useApp } from '@/stores'
import {
  fetchNewsList,
  fetchMenuList,
  fetchNewsType,
  fetchPlaceList,
  fetchStrategyList,
} from '@/api/scenic'
import { getText } from '@/untils'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import $t from '@/service/i18n'
const router = useRouter()
const { currentScenic, guideTypeList } = useApp()
const newsBanner = reactive([])
const introductionData = reactive([])
const homeTopBg = {
  cn: 'home-top-cn',
  en: 'home-top-en',
}
function getScenicImageUrl(name) {
  return new URL(`../../static/home/${name}.png`, import.meta.url).href
}
fetchMenuList().then(
  (res) => {
    const newsMenu = res.list.find((item) => item.templateCode === 'news')
    const introductionMenu = res.list.find((item) => item.templateCode === 'place')
    const guideMenu = res.list.find((item) => item.templateCode === 'strategy')
    const newsParams = {
      pageSize: 5,
      pageNum: 1,
      status: 1,
      menuId: newsMenu.id,
    }
    // 获取轮播新闻
    fetchNewsList(newsParams).then(
      (news) => {
        newsBanner.value = news.list
      },
      (err) => {
        console.log('***', err)
      }
    )
    const introductionParams = {
      pageNum: 1,
      pageSize: 3,
      menuId: introductionMenu?.id,
      status: 1,
    }
    // 获取景区介绍列表
    fetchPlaceList(introductionParams).then(
      (res) => {
        introductionData.value = res.list
      },
      (err) => {
        console.log('***', err)
      }
    )
  },
  (err) => {
    console.log('***', err)
  }
)
// -------------------------进入详情----------------------
const goGuide = (item) => {
  router.push({
    path: '/travelGuide',
    query: {
      typeId: item.id,
    },
  })
}
const goMore = (url, isHerf) => {
  if (isHerf) {
    window.open(url)
  } else {
    router.push({
      path: url,
    })
  }
}
const goDetail = (url, item) => {
  if (item.url) {
    window.open(item.url)
  } else {
    router.push({
      name: url,
      query: {
        id: item.id,
        typeId: item.typeId,
      },
    })
  }
}
// -------------------------页面效果-----------------------
const newsBox = ref(null)
const introductionBox = ref(null)
const shoppingBox = ref(null)
const vrBox = ref(null)
const guideBox = ref(null)
const reserveBox = ref(null)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
const isNewsOpcity = ref(true)
const isIntroductionOpcity = ref(true)
const isShoppingOpacity = ref(true)
const isVROpacity = ref(true)
const isGuideOpacity = ref(true)
const isReserveOpacity = ref(true)
const handleScroll = (e) => {
  if (window.innerHeight >= newsBox.value.getBoundingClientRect().top && isNewsOpcity.value) {
    isNewsOpcity.value = false
  }
  if (
    window.innerHeight >= introductionBox.value.getBoundingClientRect().top &&
    isIntroductionOpcity.value
  ) {
    isIntroductionOpcity.value = false
  }
  if (
    window.innerHeight >= shoppingBox.value.getBoundingClientRect().top &&
    isShoppingOpacity.value
  ) {
    isShoppingOpacity.value = false
  }
  if (window.innerHeight >= vrBox.value.getBoundingClientRect().top && isVROpacity.value) {
    isVROpacity.value = false
  }
  if (window.innerHeight >= guideBox.value.getBoundingClientRect().top && isGuideOpacity.value) {
    isGuideOpacity.value = false
  }
  if (
    window.innerHeight >= reserveBox.value.getBoundingClientRect().top &&
    isReserveOpacity.value
  ) {
    isReserveOpacity.value = false
  }
}
</script>

<style scoped lang="scss">
.home-top {
  background-size: contain;
  background-repeat: no-repeat;
}
.moreBox {
  transition-property: all;
  transition-duration: 500ms;
}
.moreBox:hover {
  .moreBg {
    animation: ani 1.2s infinite;
  }
}
@keyframes ani {
  0% {
    width: 0px;
    height: 0px;
    background-color: #a3a3a3;
  }
  100% {
    width: 145px;
    height: 145px;
    background-color: rgba($color: #a3a3a3, $alpha: 0);
  }
}
.newsItem {
  transition-property: all;
  transition-duration: 500ms;
}
.newsItem:hover {
  text-shadow: 4px 4px 4px #5c5c5c;
}
.scenicBg {
  background-image: url('@/static/home/scenicBg.png');
  background-size: 100% 100%;
}
.introduction-img {
  transition-property: all;
  transition-duration: 500ms;
}
.introduction-img:hover {
  transform: translateY(-20px);
  box-shadow: 10px 10px 10px #000;
}
.shopping-title {
  background-image: url('@/static/home/shopping-title.png');
  background-size: 100% 100%;
}
.vrBox {
  background-image: url('@/static/home/vr-bg.png');
  background-size: 100% 100%;
}
.guideBg {
  background-image: url('@/static/home/guideBg.png');
  background-size: 100% 706px;
  background-repeat: no-repeat;
  background-position: bottom;
}
.guideItem {
  &-content {
    transition-property: all;
    transition-duration: 500ms;
  }
}
.guideItem:hover {
  .guideItem-content {
    transform: translateY(-300px);
    color: #fff;
    padding-bottom: 40px;
    background-color: rgba($color: #000000, $alpha: 0.4);
  }
}
.reserveBg {
  background-image: url('@/static/home/reserveBg.png');
  background-size: 100% 100%;
}
:deep .arco-carousel-indicator-wrapper-bottom {
  opacity: 0;
}
</style>
