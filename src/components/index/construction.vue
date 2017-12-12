<!--
    @ construction
    @ author: tangyuan
    @ desc: DDoS产品功能介绍部分
    @ date: 07-11-09 pm
    @ last-update: 07-11-30 pm
-->

<template lang="jade">
  section.con_container(:style="bgImg")
    div.c_con_bg
    article.con_wrap 
      img.con_img(src="./../../public/imgs/working.png")
      div.con_desc_wrap
        h2 以下功能正在紧张开发中...
        h5 域名无忧：
        p <span class="c_blank"></span>域名实时监控、域名秒级刷新
        h5 网站安全：
        p <span class="c_blank"></span>WEB漏洞监测、网站挂马监测、网页篡改监测、网页敏感内容监测、网站可用性监测
      h1.con_d_tittle 敬请期待！
</template>
<script>
    export default {
        name: 'construction',
        data() {
            return { bgImg: { backgroundImage: `url( ${require('./../../public/imgs/timg.png')} )` } }
        }
    }
</script>
<style lang="sass" scoped>
  @import "./../../public/scss/modules/construction.scss";
</style>