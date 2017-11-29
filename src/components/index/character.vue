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
      div.c_arrow_w
        div.c_a_h
          div.a_h.a_h_left
          div.a_h.a_h_right
        div.c_a_f
      p.c_a_desc.attack 进攻
    article.c_wrap
      div.client_side  客户端
        img.c_img(src="./../../public/imgs/side.png")
      div.c_w_desc
        div.f_wrap
          Wall
      div.virus 黑客
        img.c_img(src="./../../public/imgs/virus.png")
</template>
<script>
    import Vue from 'vue'
    import Wall from './wall'

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
        components: {
            Wall
        }
    }
</script>
<style lang="sass" scoped>
  @import "./../../public/scss/modules/character.scss";
</style>