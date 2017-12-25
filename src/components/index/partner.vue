<!--
    @ partner
    @ author: tangyuan
    @ desc: 合作伙伴
    @ date: 07-12-04 am
-->

<template lang="jade">
  section.p_container(:style="bg")
    div.p_bg
    h1.p_title 合作伙伴
    article.p_wrap
      div.p_con(v-for="company in companies")(:class="company.class")
        h3.p_desc_title  {{company.title}}
        img.p_img(v-for="imgUrl in company.imgUrls")(:src="imgUrl.url") 
</template>

<script>
    export default {
        name: 'partner',
        data() {
            return {
                bg: { backgroundImage: `url( ${require('./../../public/imgs/partnerBg.png')} )` },
                companies: [
                    {
                        title: '互联网公司',
                        class: '',
                        imgUrls: [
                            { url: `${require('./../../public/imgs/jd.png')}` },
                            { url: `${require('./../../public/imgs/ali.png')}` },
                            { url: `${require('./../../public/imgs/baidu.png')}` },
                            { url: `${require('./../../public/imgs/tencent.png')}` }
                        ]
                    },
                    {
                        title: '保险公司',
                        class: 'con_m',
                        imgUrls: [
                            { url: `${require('./../../public/imgs/pingan.png')}` },
                            { url: `${require('./../../public/imgs/cl.png')}` },
                            { url: `${require('./../../public/imgs/picc.png')}` }
                        ]
                    },
                    {
                        title: '银行',
                        class: 'con_m',
                        imgUrls: [
                            { url: `${require('./../../public/imgs/cmcb.png')}` },
                            { url: `${require('./../../public/imgs/ccb.png')}` },
                            { url: `${require('./../../public/imgs/icbc.png')}` },
                            { url: `${require('./../../public/imgs/aboc.png')}` }
                        ]
                    },
                    {
                        title: '证券',
                        class: '',
                        imgUrls: [
                            { url: `${require('./../../public/imgs/cs.png')}` },
                            { url: `${require('./../../public/imgs/hs.png')}` },
                            { url: `${require('./../../public/imgs/sse.png')}` },
                            { url: `${require('./../../public/imgs/ssete.png')}` }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import './../../public/scss/modules/partner.scss'
</style>