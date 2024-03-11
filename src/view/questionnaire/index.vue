<template>
  <div class="w-full">
    <div class="w-full h-428 common-bg"></div>
    <div class="w-1200 mx-auto bg-white rounded-10 translate-y--55 py-30 px-54 box-border relative">
      <div class="flex items-center">
        <img src="@/static/ui/icon.png" class="w-20 h-20" alt="" />
        <div class="ml-9 text-14 leading-20 font-600 text-#3a3a3a">
          {{ $t('YourPosition') }}&nbsp;{{ $t('HomeTwo') }}&nbsp;&nbsp;>>&nbsp;&nbsp;<span
            class="text-14 leading-20 font-600 text-#000"
            >问卷调查</span
          >
        </div>
      </div>
      <div class="mt-38 text-22 leading-30 font-400">问卷调查</div>
      <div class="mt-15 leading-25 text-#656565 text-14">
        欢迎来到苏州博物馆。您的反馈对我们所提供的陈列与服务有着至关重要的作用，将是我们改进工作的重要参考依据。请您协助完成这份调查问卷，这将花费您大约3分钟的时间。请选择符合您情况的选项，谢谢您的大力协助。
      </div>
      <div class="w-full mt-20">
        <a-form ref="formRef" :model="form" layout="vertical" class="w-full" @submit="handleSubmit">
          <a-form-item
            v-for="(item, index) in questionnaireData"
            :key="index"
            :field="`value${index}`"
            :label="item.question"
            validate-trigger="blur"
            :rules="[{ required: item.isRequired, message: '请输入' }]"
          >
            <a-radio-group v-if="item.type === 'single'" v-model="form[`value${index}`]">
              <a-radio v-for="(child, index) in item.body" :key="index" :value="child">{{
                child
              }}</a-radio>
            </a-radio-group>
            <a-checkbox-group v-else-if="item.type === 'checkbox'" v-model="form[`value${index}`]">
              <a-checkbox v-for="(child, index) in item.body" :key="index" :value="child">{{
                child
              }}</a-checkbox>
            </a-checkbox-group>
            <a-textarea
              v-else-if="item.type === 'textarea'"
              v-model="form[`value${index}`]"
              placeholder="Please enter something"
              allow-clear
            />
          </a-form-item>
          <a-form-item>
            <div class="w-full flex justify-center">
              <a-button type="primary" class="w-100" html-type="submit" :loading="isLoading">{{
                $t('Submit')
              }}</a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import $t from '@/service/i18n'
const form = ref({})
const isLoading = ref(false)
const questionnaireData = [
  {
    question: '全预约入馆前，您曾来过苏州博物馆吗？',
    type: 'single',
    body: ['曾经来过', '从未来过'],
    isRequired: true,
  },
  {
    question: '以下博物馆的文创中，您更偏好购买哪种？（可多选）',
    type: 'checkbox',
    body: ['书籍', '服饰', '玩具', '影像制品', '饰品（饰件）', '其他'],
    isRequired: true,
  },
  {
    question: '请列出几个您参观过的其他知名博物馆，并写下我们相对需要改进的方面',
    type: 'textarea',
    body: '',
    isRequired: true,
  },
]
const handleSubmit = (value, callback) => {
  console.log('%%%%', value)
  if (value.errors) {
    return
  } else {
    isLoading.value = true
    // addReserve(value.values).then(
    //   (res) => {
    //     const newData = JSON.parse(JSON.stringify(defaultForm()))
    //     Object.keys(form.value).forEach((key) => {
    //       form.value[key] = newData[key]
    //     })
    //     formRef.value?.clearValidate()
    //     Notification.success({
    //       content: '提交成功',
    //       position: 'topRight',
    //     })
    //     isLoading.value = false
    //   },
    //   (err) => {
    //     Notification.error({
    //       content: '提交失败：' + err,
    //       position: 'topRight',
    //     })
    //     isLoading.value = false
    //   }
    // )
  }
}
</script>
