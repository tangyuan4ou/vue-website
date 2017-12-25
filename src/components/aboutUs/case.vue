<!--
    @ about
    @ author: tangyuan
    @ desc: 关于我
    @ date: 07-12-07 am
-->

<template lang="jade">
  section.cas_container 
    div.cas_wrap
      h1 安全服务案例
      article.cas_desc_con
        div.cas_d_wrap(v-for="des in descs")(:style="{backgroundImage: des.bg}")
          div.cas_d_w_bg
          p.cas_desc {{des.test}}
        div.cas_d_wrap
          img(src='./../../public/imgs/5.jpg')
          div.cas_d_w_bg
          div.more 查看更多案例 
</template>

<script>
    export default {
        name: 'case',
        data() {
            return {
                descs: [
                    {
                        bg: `url( ${require('./../../public/imgs/1.jpg')} )`,
                        test: '2017年某电商双十一安全保障'
                    },
                    {
                        bg: `url( ${require('./../../public/imgs/3.jpg')} )`,
                        test: '2017年中共十九大安全保障'
                    },
                    {
                        bg: `url( ${require('./../../public/imgs/4.jpg')} )`,
                        test: '2017年某公司国际方向攻击防护'
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import './../../public/scss/modules/case.scss'
</style>