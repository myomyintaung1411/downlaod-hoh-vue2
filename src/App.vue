<template>
  <div class="w-full h-full relative sm:max-w-md sm:mx-auto sm:bg-[#e53123] ">
    <main>
      <router-view />
    </main>
  </div>

</template>


<style>
:root {
  --van-field-label-color	: #000;
  --van-field-input-text-color	: #000;
  --van-field-placeholder-text-color	: #941010;
}
html {
  scroll-behavior: smooth;
}

*:focus {
  outline: none !important;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  font-family: "Open Sans", sans-serif;
   background: linear-gradient(169deg, #e53123 0%, #e53327 38%, #e43c31 65%, #e43c31 95%);  /* #15171f */

  min-height: 100vh;
  width: 100%;
  /* max-width: 500px; */
  
  color: #fff;
  font-family: PingFang SC, Hiragino Sans GB, Helvetica Neue, Microsoft Yahei, sans-serif, arial;
}

@media (min-width: 640px) {
  body {
    background: none;
     position: relative;
  left: 50%;
  transform: translateX(-50%);

  }
}

.form_background{
  background: rgb(78, 108, 80);
}
.white_color{
  background:#fff;
}
.button_color{
  /* background: rgb(173, 142, 88); */
  background: rgb(139, 172, 170);
}

</style>
