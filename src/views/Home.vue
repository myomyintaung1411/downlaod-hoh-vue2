<template>
  <div class="main">
    <div class="pt-28 pb-5">
      <div class="logo_section px-20 pt-6">
        <div class="logo_main w-full flex flex-col justify-center items-center">
          <img src="@/assets/logo.jpg" alt="logo" class="w-20 h-20 rounded-full" />
          <p class="text-xl font-bold pt-2 text-[#fa3636] tracking-wide">手拉手公益</p>
        </div>
      </div>

      <section class="w-full relative py-3 px-5">
        <form @click.prevent class="py-3">
          <div class="flex items-center w-full relative h-12 rounded-md bg-white">
            <div
              class="border-none w-full h-full text-base flex justify-center items-center relative"
            >
              <input
                v-model="phoneNumber"
                type="tel"
                maxlength="11"
                min="11"
                minlength="11"
                placeholder="请输入手机号"
                class="input-name text-[#524d4d] bg-transparent placeholder:tracking-wider px-3 border-none outline-none focus:outline-none focus:border-none w-full h-full"
              />
            </div>
          </div>
          <div class="flex items-center w-full relative h-12 rounded-md bg-white mt-5">
            <div
              class="border-none w-full h-full text-base flex justify-center items-center relative"
            >
              <input
                v-model="password"
                autocomplete="off"
                type="password"
                maxlength="17"
                min="6"
                minlength="6"
                placeholder="请输入密码"
                class="input-name text-[#524d4d] bg-transparent placeholder:tracking-wider px-3 border-none outline-none focus:outline-none focus:border-none w-full h-full"
              />
            </div>
          </div>
          <div class="flex items-center w-full relative h-12 rounded-md bg-white mt-5">
            <div
              class="border-none w-full h-full text-base flex justify-center items-center relative"
            >
              <input
               
                v-model="invite_code"
                type="text"
                maxlength="8"
                min="8"
                minlength="8"
                placeholder="请输入邀请码"
                class="input-name text-[#524d4d] bg-transparent placeholder:tracking-wider px-3 border-none outline-none focus:outline-none focus:border-none w-full h-full"
              />
            </div>
          </div>

          <div class="flex items-center w-full relative h-12 rounded-md bg-white mt-5">
            <div
              class="border-none w-full h-full text-base flex justify-center items-center relative"
            >
              <input
                v-model="recapChaCode"
                type="tel"
                maxlength="6"
                min="6"
                minlength="6"
                placeholder="请输入验证码"
                class="input-name text-[#524d4d] placeholder:tracking-wider bg-transparent px-3 border-none outline-none focus:outline-none focus:border-none w-full h-full"
              />
              <div class="absolute right-2 cursor-pointer">
                <button
                  :disabled="codeDisable"
                  @click="getCode()"
                  class="bg-[#fa3636] text-white rounded px-2 py-1 text-sm"
                  :class="!codeDisable ? '' : ' opacity-80 cursor-not-allowed'"
                >
                  {{ codeMsg }}
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center w-full relative h-12 rounded-md bg-white mt-5">
            <div
              class="border-none w-full h-full text-base flex justify-center items-center relative"
            >
              <input
                v-model="svg_recaptcha"
                type="text"
                maxlength="6"
                min="6"
                minlength="6"
                placeholder="请输入验证码"
                class="input-name text-[#524d4d] placeholder:tracking-wider bg-transparent px-3 border-none outline-none focus:outline-none focus:border-none w-full h-full"
              />
              <div  @click="refreshCode" class="absolute right-2 cursor-pointer ">
                <!-- <button
                  :disabled="codeDisable"
                  @click="getCode()"
                  class="bg-[#fa3636] text-white rounded px-2 py-1 text-sm"
                  :class="!codeDisable ? '' : ' opacity-80 cursor-not-allowed'"
                >
                  {{ codeMsg }}
                </button> -->
                 <div class="w-24 flex items-center justify-center h-8" v-html="identifyCode"></div>
              </div>
            </div>
          </div>

          <div class="mt-5 flex items-center w-full relative text-base">
            <button
              @click="onSubmit"
              :disabled="loading"
              :loading="loading"
              block
              class="back_muli w-full"
              native-type="submit"
              style="
                background-color: #fa3636;
                border: none;
                color: #fff;
                height: 50px;
                font-size: 16px;
                letter-spacing: 1px;
              "
            >
              注册
            </button>
          </div>
        </form>
        <div v-if="app_url" class="mt-2">
          <!-- <div v-if="isAndroid" class="py-3 w-full relative">
            <div 
              @click="downLoad(0)"
              class="py-4 bg-[#fa3636] rounded text-center flex items-center justify-center space-x-4 cursor-pointer"
            >
              <img src="@/assets/android.svg" alt="" class="w-7 h-7" />
              <span class="font-bold pt-1 text-base tracking-wider uppercase"
                >安卓下载一</span
              >
            </div>
          </div>
          <div v-if="isAndroid" class="py-3 w-full relative">
            <div
              @click="downLoad(2)"
              class="py-4 bg-[#fa3636] rounded text-center flex items-center justify-center space-x-4 cursor-pointer"
            >
              <img src="@/assets/android.svg" alt="" class="w-7 h-7" />
              <span class="font-bold pt-1 text-base tracking-wider uppercase"
                >安卓下载二</span
              >
            </div>
          </div>
          <div v-if="isIOS" class="py-3 w-full relative">
            <div
              @click="downLoad(1)"
              class="py-4 bg-[#fa3636] rounded text-center flex items-center justify-center space-x-4 cursor-pointer"
            >
              <img src="@/assets/iOS.svg" alt="" class="w-7 h-7" />
              <span class="font-bold pt-1 text-base tracking-wider">苹果下载</span>
            </div>
          </div> -->

        <!-- <div v-if="isAndroid" class="py-3 w-full relative">
            <a :href="app_url.android1" download
              
              class="py-4 bg-[#fa3636] rounded text-center flex items-center justify-center space-x-4 cursor-pointer"
            >
              <img src="@/assets/android.svg" alt="" class="w-7 h-7" />
              <span class="font-bold pt-1 text-base tracking-wider uppercase"
                >安卓下载一</span
              >
            </a>
          </div> -->

          <div v-if="isAndroid" class="py-3 w-full relative">
            <a :href="app_url.android2" download
             
              class="py-4 bg-[#fa3636] rounded text-center flex items-center justify-center space-x-4 cursor-pointer"
            >
              <img src="@/assets/android.svg" alt="" class="w-7 h-7" />
              <span class="font-bold pt-1 text-base tracking-wider uppercase"
                >安卓下载</span
              >
            </a>
          </div>

          <div v-if="isIOS" class="py-3 w-full relative">
            <a :href="app_url.ios" download class="py-4 bg-[#fa3636] rounded text-center flex items-center justify-center space-x-4 cursor-pointer"
            >
              <img src="@/assets/iOS.svg" alt="" class="w-7 h-7" />
              <span class="font-bold pt-1 text-base tracking-wider">苹果下载</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script>
import allApi from '@/network/allApi.js'
import { Toast } from 'vant'

export default {
  name: 'Home',

  data() {
    return {
      codeDisable: false,
      codeMsg: '获取验证码',
      timer: null,
      countdown: 60,
      loading: false,
      recapChaCode: '',
      password: '',
      phoneNumber: '',
      invite_code: '',
      isIOS: false,
      isAndroid: false,
      app_url:null,
      svg_recaptcha:'',
      identifyCode:''
    }
  },
  methods: {
    getCode() {
      if (this.phoneNumber == '') return Toast('请输入手机号')

      if (this.phoneNumber?.length < 11) return Toast('手机号应为 11 个字符')
      if (
        !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
          this.phoneNumber
        )
      ) {
        return Toast('手机号格式不对')
      }
      this.getValidStr()
    },

    getValidStr() {
      console.log(this.codeDisable, 'disable') //
      this.codeMsg = '重发(' + this.countdown + ')'
      this.countdown--
      if (this.countdown == 59) {
        console.log('countdown value is', this.countdown)
        this.createPhoneCode()
      }
      if (this.countdown <= 0) {
        this.countdown = 60
        this.codeMsg = '获取验证码'
        this.codeDisable = false
      } else {
        this.codeDisable = true
        this.timer = setTimeout(() => {
          this.getValidStr()
        }, 1000)
      }
    },

    createPhoneCode() {
      let data = {
        type: 1,
        username: this.phoneNumber,
      }
      //getRecaptcha
      Toast.loading({
        message: '请稍后...',
        forbidClick: true,
      })
      allApi
        .OptCode(data)
        .then((res) => {
          console.log(res, 'reg sms code')
          Toast(res?.data?.msg)
          if (res.data.code == '0') {
            this.recapChaCode = res.data?.data?.code
            //this.codeMsg = "获取校验码";
            //this.codeDisable = false
            //clearTimeout(this.timer)
            //this.countdown = 60;
            console.log('success *************************')
          }
        })
        .catch((e) => {
          console.log(e)
          //catch error then reset timer
          clearTimeout(this.timer)
          this.codeMsg = '获取验证码'
          this.codeDisable = false
          this.countdown = 60
        })
    },

    onSubmit() {
      if (
        this.phoneNumber == '' ||
        this.password == '' ||
        this.invite_code == '' ||
        this.recapChaCode == '' ||
        this.svg_recaptcha == ''
      )
        return Toast('请输入完整的注册信息')

      if (this.password.length < 6) return Toast('密码必须至少有6个字符长')

      // if (!/(?=.*\d)(?=.*[A-Z])/.test(this.password)) {
      //   return Toast('密码应至少包含一个大写字母和数字')
      // }

      let data = {
        username: this.phoneNumber,
        password: this.password,
        invite_code: this.invite_code,
        recaptcha: this.recapChaCode,
        phoe:this.svg_recaptcha,
        device: 'H5',

      }
      Toast.loading({
        message: '请稍后...',
        forbidClick: true,
        duration: 2000,
      })
      this.loading = true

      allApi
        .Register(data)
        .then((res) => {
         //console.log(res,"register")
          this.loading = false
          Toast(res?.data?.msg)

          if (res.data.code == '0') {
            // setTimeout(() => {
            //    router.push({ path: '/download', query: { inviteCode: invite_code.value } })
            // }, 2000);
          }
        })
        .catch((e) => {
          this.loading = false
          console.log(e, 'error')
        })
    },

    downLoad(number) {
      switch (number) {
        case 0:
          window.open(this.app_url?.android1)
          // showToast('test 1')
          break
        case 1:
          // showToast('test 2')
          window.open(this.app_url?.ios)
          break
        case 2:
          // showToast('test 2')
          window.open(this.app_url?.android2)
          break

        default:
          break
      }
    },

    checkOS() {
      const userAgent = navigator?.userAgent
      console.log(userAgent)
      this.isAndroid = /Android/.test(userAgent)
      this.isIOS = /iPhone|iPad|iPod/.test(userAgent)
    },

    getDownLink(){
      Toast.loading({
        message: '请稍后...',
        forbidClick: true,
        duration: 2000,
      })
      this.loading = true

      allApi
        .DownLoadApp()
        .then((res) => {
          this.loading = false
          Toast(res?.data?.msg)
           // console.log(res.data)
          if (res.data.code == '0') {
            this.app_url = res.data?.data
            // setTimeout(() => {
            //    router.push({ path: '/download', query: { inviteCode: invite_code.value } })
            // }, 2000);
          }
        })
        .catch((e) => {
          this.loading = false
          console.log(e, 'error')
        })
    },
    refreshCode(){
      this.getSvgRecap()
    },
    getSvgRecap(){
      allApi.Get_SvgCode().then((res)=>{
        //console.log(res,"svg");
        if(res.data.code == '0'){
          this.identifyCode = res?.data?.data?.source
        }
      }).catch((e)=>{
        console.log(e);
      })
    }
  },
  mounted() {
    this.getSvgRecap()
    this.getDownLink()
    if (this.$route?.query !== undefined && this.$route?.query?.shareCode !== undefined) {
      console.log(this.$route?.query)
      this.invite_code = this.$route?.query?.shareCode
    }
    this.checkOS()
  },
}
</script>

<style scoped>
.main {
  background-image: url(@/assets/loginBg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-y: auto;
  /* padding-top: 80px; */
}
</style>