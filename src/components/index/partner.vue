<!--
    @ partner
    @ author: tangyuan
    @ desc: 合作伙伴
    @ date: 07-12-04 am
    @ last-update: 07-12-04 pm
-->

<template lang="jade">
  section.p_container(:style="bg")
    div.p_bg
    h1.p_title 合作伙伴
    article.p_wrap
      div.p_con
      div.p_con
      div.p_con
      div.p_con
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'partner',
        data() {
            return {
                bg: { backgroundImage: 'url(' + require('./../../public/imgs/partnerBg.png') + ')' }
            }
        },
        created() {
        }
    }
</script>

<style lang="sass" scoped>
    @import './../../public/scss/modules/partner.scss'
</style>