<template>
    <div class="h-screen sm:h-auto">
      <div class="sm:mt-[74px] h-full sm:h-auto flex flex-col justify-center items-center relative">
        <div class="h-[307px] w-[307px]">
          <div class="h-full w-full flex justify-center items-center">
            <img src="@/assets/404.jpg" alt="" class="w-[500px] h-[200px]" draggable="false" loading="lazy">
          </div>
        </div>
        <p class="pt-5 text_color text-xl tracking-wider text-center">出错啦，您访问的页面无法连接！</p>
        <router-link to="/" class="py-3 flex items-center space-x-2 text-white text-[18px]">
          <p>联系客服</p>
          <van-icon name="arrow" />
        </router-link>
        <div class="py-3 w-[200px] ">
          <div  class="btn_login text-center py-3 cursor-pointer text-lg text-white">
            <van-button @click="goService" block  hairline color="#fa3636">联系客服</van-button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  methods: {
    goService(){
      this.$router.push('/')
    }
  }
}
</script>