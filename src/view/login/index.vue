<template>
  <div class="w-full h-100vh loginBox">
    <div class="h-full relative overflow-hidden w-full">
      <img
        src="@/static/login/1.png"
        alt=""
        class="absolute top-50% translate-y--50%"
        style="width: 27.5%; height: 40%; left: 7.5%"
      />
      <img
        src="@/static/login/2.png"
        alt=""
        class="absolute top-50% translate-y--50%"
        style="width: 27.5%; height: 48%; left: 32%"
      />
      <img
        src="@/static/login/3.png"
        alt=""
        class="w-412 h-265 absolute top-50% translate-y--50%"
        style="width: 27.5%; height: 39%; right: -5.1%"
      />
      <!-- 登录 -->
      <div
        class="bg-white rounded-12 login-form absolute top-50% translate-y--50% px-30 box-border py-55 box-border overflow-hidden"
        style="width: 24%; min-height: 375px; height: 55%; right: 17.3%"
      >
        <div class="w-full h-full overflow-hidden flex">
          <!-- 登录 -->
          <div
            class="flex flex-shrink-0 flex-col justify-between h-full w-full transition-all duration-1000"
            :style="{ transform: `translateX(${isLogin ? '0px' : '-100%'})` }"
            :class="isLogin ? '' : 'opacity-0'"
          >
            <div class="text-#1d9043 text-20 font-bold flex-shrink-0 mb-25">
              {{ $t('UserLogin') }}
            </div>
            <a-form
              ref="formRef"
              auto-label-width
              layout="horizontal"
              :model="form"
              class="justify-between flex-1"
              @submit="submitForm"
            >
              <a-form-item
                field="identifier"
                label="账号"
                validate-trigger="blur"
                :rules="[
                  {
                    required: true,
                    validator: validateUser,
                  },
                ]"
              >
                <a-input v-model="form.identifier" placeholder="5-16位字母开头账号" allow-clear>
                  <template #prefix>
                    <img src="@/static/login/user.png" alt="" class="w-16 h-16" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                field="credential"
                label="密码"
                validate-trigger="blur"
                class="relative"
                :rules="[
                  {
                    required: true,
                    validator: validatePassword,
                  },
                ]"
              >
                <a-input-password
                  v-model="form.credential"
                  placeholder="8-16位数字、字母密码"
                  allow-clear
                >
                  <template #prefix>
                    <img src="@/static/login/password.png" alt="" class="w-16 h-16" />
                  </template>
                </a-input-password>
                <div
                  class="flex justify-between items-center text-#676767 absolute left-0 top-48 w-full"
                >
                  <a-checkbox v-model="rememberPassword" @change="setRememberPassword">{{
                    $t('Remember')
                  }}</a-checkbox>
                  <div class="cursor-pointer">
                    {{ $t('Forget')
                    }}<span @click="changeLogin" class="text-blue-500">{{ $t('Registered') }}</span>
                  </div>
                </div>
              </a-form-item>
              <a-form-item hide-label style="margin-bottom: 0px">
                <div class="w-full mt-40">
                  <a-button
                    class="w-full h-full"
                    status="success"
                    type="primary"
                    :loading="isLoading"
                    html-type="submit"
                    >{{ $t('Login') }}</a-button
                  >
                </div>
              </a-form-item>
            </a-form>
          </div>
          <!-- 注册 -->
          <div
            class="flex flex-col flex-shrink-0 justify-between h-full w-full transition-all duration-1000"
            :style="{ transform: `translateX(${isLogin ? '0px' : '-100%'})` }"
            :class="isLogin ? 'opacity-0' : ''"
          >
            <div class="text-#1d9043 text-20 font-bold mb-25">{{ $t('UserRegistration') }}</div>
            <a-form
              ref="formRef"
              auto-label-width
              layout="horizontal"
              :model="form"
              class="justify-between flex-1"
              @submit="submitForm"
            >
              <a-form-item
                field="identifier"
                label="账号"
                validate-trigger="blur"
                :rules="[
                  {
                    required: true,
                    validator: validateUser,
                  },
                ]"
              >
                <a-input v-model="form.identifier" placeholder="5-16位字母开头账号" allow-clear>
                  <template #prefix>
                    <img src="@/static/login/user.png" alt="" class="w-16 h-16" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item
                field="credential"
                label="密码"
                validate-trigger="blur"
                :rules="[
                  {
                    required: true,
                    validator: validatePassword,
                  },
                ]"
              >
                <a-input-password
                  v-model="form.credential"
                  placeholder="8-16位数字、字母密码"
                  allow-clear
                >
                  <template #prefix>
                    <img src="@/static/login/password.png" alt="" class="w-16 h-16" />
                  </template>
                </a-input-password>
              </a-form-item>
              <a-form-item
                field="uniqueIdentity"
                class="relative"
                label="手机"
                validate-trigger="blur"
                :rules="[
                  {
                    required: true,
                    validator: validatePhone,
                  },
                ]"
              >
                <div class="w-full">
                  <a-input v-model="form.uniqueIdentity" placeholder="请输入手机号码" allow-clear>
                    <template #prefix>
                      <div class="ic-outline-phone w-16 h-16 text-gray-400"></div>
                    </template>
                  </a-input>
                  <div
                    class="flex justify-between items-center text-#676767 absolute left-0 top-48"
                  >
                    <div class="cursor-pointer">
                      已有账号？<span @click="changeLogin" class="text-blue-500"
                        >前往{{ $t('Login') }}</span
                      >
                    </div>
                  </div>
                </div>
              </a-form-item>
              <a-form-item hide-label style="margin-bottom: 0px">
                <div class="w-full mt-40">
                  <a-button
                    class="w-full h-full"
                    status="success"
                    type="primary"
                    :loading="isLoading"
                    html-type="submit"
                    >{{ $t('Registered') }}</a-button
                  >
                </div>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { registerUser, login } from '@/api/user'
import { validatePhone, validatePassword, validateUser } from '@/service/validate'
import { Notification } from '@arco-design/web-vue'
import $t from '@/service/i18n'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLogin = ref(true)
const isLoading = ref(false)
const changeLogin = () => {
  isLogin.value = !isLogin.value
}
const formRef = ref()
const formLogRef = ref()
const defaultForm = () => {
  return {
    projectName: 'taohuayuan',
    identityType: 'USERNAME',
    identifier: '',
    credential: '',
    uniqueIdentity: '',
  }
}
const form = ref(defaultForm())
const loginConfig = JSON.parse(window.localStorage.getItem('login-config'))
const rememberPassword = ref(false)
if (loginConfig) {
  form.value.identifier = loginConfig.identifier
  form.value.credential = loginConfig.credential
  rememberPassword.value = true
}
const setRememberPassword = (value) => {
  rememberPassword.value = value
}
const submitForm = (value, callback) => {
  if (value.errors) {
    callback()
  } else {
    console.log('^^^', value.values)
    isLoading.value = true
    const action = isLogin.value ? login : registerUser
    action(value.values).then(
      (res) => {
        console.log('res', res)
        if (res.resCode && res.resCode !== 200) {
          Notification.error({
            content: isLogin.value ? '用户名或密码错误' : '注册失败：' + res.errInfo,
            position: 'topRight',
          })
        } else {
          Notification.success({
            content: isLogin.value ? '登录成功' : '注册成功',
            position: 'topRight',
          })
          if (isLogin.value) {
            window.localStorage.setItem('tToken', res.token)
            window.localStorage.setItem('userAuths', JSON.stringify(res.userAuths))
            if (rememberPassword.value) {
              window.localStorage.setItem(
                'login-config',
                JSON.stringify({
                  identifier: value.values.identifier,
                  credential: value.values.credential,
                })
              )
            } else {
              window.localStorage.removeItem('login-config')
            }
            formLogRef.value?.clearValidate()
            setTimeout(() => {
              router.push({
                path: '/',
              })
              window.location.reload()
            }, 500)
          } else {
            formRef.value?.clearValidate()
            changeLogin()
          }
          const newData = JSON.parse(JSON.stringify(defaultForm()))
          Object.keys(form.value).forEach((key) => {
            form.value[key] = newData[key]
          })
        }
        isLoading.value = false
      },
      (err) => {
        console.log(err)
        Notification.error({
          content: isLogin.value ? '用户名或密码错误' : '注册失败' + err,
          position: 'topRight',
        })
        isLoading.value = false
      }
    )
  }
}
</script>

<style scoped lang="scss">
.loginBox {
  background-image: url('@/static/login/bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .login-form {
    box-shadow: 3px 3px 13px -1px rgba(81, 81, 81, 0.5);
  }
}
</style>
