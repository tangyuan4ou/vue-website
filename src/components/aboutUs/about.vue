<!--
    @ about
    @ author: tangyuan
    @ desc: 关于我
    @ date: 07-12-06 am
-->

<template lang="jade">
  section.a_container(:style="bgImg")
    div.a_decs_wrap 
      div.a_d_con 
        h2.a_d_title 公司介绍:
        p &nbsp;&nbsp;&nbsp;&nbsp;中国联通网络安全业务运营中心成立于2017年，是中国联通在网络安全领域的专业化运营团队，专注于安全态势感知、DDoS防护、域名防护、网站安全防护等领域，秉承合作开放共赢的理念，与合作伙伴一起致力于网络空间安全的观测、保护、治理。
</template>
<script>
    export default {
        name: 'about',
        data() {
            return {
                bgImg: { backgroundImage: `url( ${require('./../../public/imgs/abBg.jpg')} )` }
            }
        }
    }
</script>
<style lang="sass" scoped>
  @import './../../public/scss/modules/about.scss'  
</style>