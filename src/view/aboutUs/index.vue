<template>
  <div class="w-full">
    <div class="w-full h-428 aboutUs-bg"></div>
    <div class="w-1200 mx-auto bg-white py-40 box-border relative">
      <!-- <Side></Side> -->
      <div class="bg-black bg-opacity-50 p-10 box-border absolute top--80">
        <div
          class="w-full h-full border-3 border-white py-20 px-36 text-white text-28 leading-40 font-600"
        >
          {{ $t('ContactUs') }}
        </div>
      </div>
      <div class="flex items-center">
        <img src="@/static/ui/icon.png" class="w-20 h-20" alt="" />
        <div class="ml-9 text-14 leading-20 font-600 text-#3a3a3a">
          {{ $t('YourPosition') }}&nbsp;{{ $t('HomeTwo') }}&nbsp;&nbsp;>>&nbsp;&nbsp;{{
            $t('ContactUs')
          }}&nbsp;&nbsp;>>&nbsp;&nbsp;<span class="text-14 leading-20 font-600 text-black">{{
            getText(currentTitle)
          }}</span>
        </div>
      </div>
      <div class="mt-38 text-22 leading-32 font-600">{{ $t('ContactUs') }}</div>
      <!-- <div class="flex items-center mt-17 flex-wrap">
        <div
          v-for="(item, index) in tabData"
          :key="index"
          class="px-20 py-10 text-16 font-400 leading-22 rounded-18 mr-16 cursor-pointer"
          :style="{
            backgroundColor: currentTab === index ? '#000' : '#eaeaea',
            color: currentTab === index ? '#fff' : '#3a3a3a',
          }"
          @click="changeInfo(index, item)"
        >
          {{ getText(item.name) }}
        </div>
      </div> -->
      <div class="flex justify-between mt-40">
        <div class="flex-1">
          <div v-show="!currentTab" v-html="getText(currentScenic.value?.corporateCulture)"></div>
          <div v-show="currentTab" class="w-full flex justify-center">
            <a-form ref="formRef" :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
              <a-form-item
                field="title"
                :label="$t('Title')"
                validate-trigger="blur"
                :rules="[{ required: true, message: $t('Enter') + $t('Title') }]"
              >
                <a-input v-model="form.title" :placeholder="$t('Enter') + $t('Title')" />
              </a-form-item>
              <a-form-item
                field="contactName"
                :label="$t('Name')"
                validate-trigger="blur"
                :rules="[{ required: true, message: $t('Enter') }]"
              >
                <a-input v-model="form.contactName" :placeholder="$t('Enter') + $t('Name')" />
              </a-form-item>
              <a-form-item
                field="concactPhone"
                :label="$t('Phone')"
                validate-trigger="blur"
                :rules="[{ required: true, validator: validatePhone }]"
              >
                <a-input v-model="form.concactPhone" :placeholder="$t('Enter') + $t('Phone')" />
              </a-form-item>
              <a-form-item field="content" :label="$t('Detail')">
                <a-textarea v-model="form.content" :placeholder="$t('Enter')" />
              </a-form-item>
              <a-form-item hide-label>
                <a-button type="primary" class="w-full" html-type="submit" :loading="isLoading">{{
                  $t('Submit')
                }}</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
        <!-- <img src="@/static/ui/common-title.png" alt="盐城龙冈桃花源" class="w-4 h-568 ml-42" />
        <div class="w-32 text-30 ml-15 qiantu">{{ getText(currentTitle) }}</div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import $t from '@/service/i18n'
import { getText } from '@/service/until'
import { useApp } from '@/stores'
import { validatePhone } from '@/service/validate'
import { addFeedBack } from '@/api/message'
import { Notification } from '@arco-design/web-vue'
const { currentScenic } = useApp()
import { useRouter } from 'vue-router'
const router = useRouter()
const tabData = [
  {
    name: {
      cn: '联系我们',
      en: 'Contact Us',
    },
  },
  // {
  //   name: {
  //     cn: '投诉建议',
  //     en: 'Feed Back',
  //   },
  // },
]
const currentTab = ref(0)
const currentTitle = ref('')
currentTitle.value = tabData[0].name
const changeInfo = (index, item) => {
  currentTab.value = index
  currentTitle.value = item.name
  if (index && !window.localStorage.getItem('tToken')) {
    router.push({
      path: '/login',
    })
  }
}
const defaultForm = () => {
  return {
    concactPhone: '',
    contactName: '',
    content: '',
    createTime: '',
    id: '',
    images: '',
    project: 'taohuayuan',
    seq: 0,
    status: 1,
    title: '',
  }
}
const form = ref(defaultForm())
const formRef = ref()
const isLoading = ref(false)
const handleSubmit = (value, callback) => {
  if (value.errors) {
    callback()
  } else {
    isLoading.value = true
    addFeedBack(value.values).then(
      (res) => {
        const newData = JSON.parse(JSON.stringify(defaultForm()))
        Object.keys(form.value).forEach((key) => {
          form.value[key] = newData[key]
        })
        formRef.value?.clearValidate()
        Notification.success({
          content: '提交成功',
          position: 'topRight',
        })
        isLoading.value = false
      },
      (err) => {
        Notification.error({
          content: '提交失败：' + err,
          position: 'topRight',
        })
        isLoading.value = false
      }
    )
  }
}
</script>

<style scoped lang="scss">
.aboutUs-bg {
  background-image: url('@/static/ui/aboutUs-bg.png');
  background-size: 100% 100%;
}
.tab-item:hover {
  color: #004a7c !important;
}
</style>
