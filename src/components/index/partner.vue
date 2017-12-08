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
        h3.p_desc_title  互联网公司
        img.p_img(src="./../../public/imgs/jd.png")
        img.p_img(src="./../../public/imgs/ali.png")
        img.p_img(src="./../../public/imgs/baidu.png")
        img.p_img(src="./../../public/imgs/tencent.png")
      div.p_con.con_m
        h3.p_desc_title  保险公司
        img.p_img.img_m(src="./../../public/imgs/pingan.png")
        img.p_img.img_m(src="./../../public/imgs/cl.png")
        img.p_img.img_m(src="./../../public/imgs/picc.png")
      div.p_con.con_m
        h3.p_desc_title  银行
        img.p_img.img_m(src="./../../public/imgs/cmcb.png")
        img.p_img.img_m(src="./../../public/imgs/ccb.png")
        img.p_img.img_m(src="./../../public/imgs/icbc.png")
        img.p_img.img_m(src="./../../public/imgs/aboc.png")
      div.p_con
        h3.p_desc_title  证券
        img.p_img(src="./../../public/imgs/cs.png")
        img.p_img(src="./../../public/imgs/hs.png")
        img.p_img(src="./../../public/imgs/sse.png")
        img.p_img(src="./../../public/imgs/ssete.png")
</template>

<script>
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