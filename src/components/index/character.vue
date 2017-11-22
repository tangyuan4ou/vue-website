<!--
    @ character
    @ author: tangyuan
    @ desc: 产品功能介绍部分
    @ date: 07-11-09 pm
    @ last-update: 07-11-22 am
-->

<template lang="jade">
  section.c_container
    div.c_bg
    h1.c_title DDoS产品功能介绍
    div.c_a_container
      p.c_a_desc.fence 三重防护
      div.c_arrow_w
        div.c_a_h
          div.a_h.a_h_left
          div.a_h.a_h_right
        div.c_a_f
      p.c_a_desc.attack 进攻
    article.c_wrap
      div.client_side  客户端
        img(src="./../../public/imgs/豌豆.gif")
      div.c_w_desc
        div.f_wrap
          div.wall
            h3 流量清洗服务
          div.w_desc
            div.w_d_arrow
            p 近源清洗与近目的清洗结合，原路径回注，客户无感知
        div.f_wrap
          div.wall
            h3 流量封堵服务
          div.w_desc
            div.w_d_arrow
            p 攻击流量近源封堵，封堵范围（全网、国际、网间、区域）按需组合
        div.f_wrap
          div.wall
            h3 攻击检测服务
          div.w_desc
            div.w_d_arrow
            p 攻击事件秒级发现，告警实时通知，定期提供流量与攻击报告
      div.virus 病毒
        img(src="./../../public/imgs/僵尸.gif")
</template>
<script>
    import Vue from 'vue'
    export default{
        name: 'charecter',
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
        },
        watch: {

        },
        components: {

        }
    }
</script>
<style lang="sass" scoped>
  @import "./../../public/scss/modules/character.scss";
</style>