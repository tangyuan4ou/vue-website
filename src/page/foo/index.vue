<!--
    @ index
    @ author: tangyuan
    @ desc: 首页轮播，目前完成顶导、banner。其他待定
    @ date: 07-11-06 am
    @ last-update: 07-11-22 am
-->
<template lang="jade">
    div.i_container
        VueNav(:navStyle="navStyle")(:logoSrc='logoSrc')
        swiper(:options="swiperOption")
            swiper-slide 
                BannerWrap
            swiper-slide
                Character(:class="character")
            swiper-slide 
                ProTrait(:class="trait")
            swiper-slide 
                Construction(:class="constreuce")
            swiper-slide.s_footer 
                Partner(:class="partner")
                VueFooter
        div.swiper-pagination(solt="pagination")
</template>
<script>
    import Vue from 'vue'
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import { mapState, mapActions, mapGetters } from 'vuex'

    import VueNav from '~/components/nav'
    import BannerWrap from '~/components/index/banner'
    import Construction from '~/components/index/construction'
    import Character from '~/components/index/character'
    import ProTrait from '~/components/index/proTrait'
    import Partner from '~/components/index/partner'
    import VueFooter from '~/components/footer'
    
    export default{
        name: 'index',
        data() {
            return {
                logoSrc: 'logo',
                navStyle: '#161823',
                character: '',
                trait: '',
                constreuce: '',
                partner: '',
                swiperOption: {
                    direction: 'vertical',
                    speed: 500,
                    scrollbarHide: true,
                    height: window.innerHeight - 80,
                    mousewheelControl: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                }
            }
        },
        created() {
            document.documentElement.style.overflowY = 'hidden'
        },
        mounted() {
            this.swiperOption.paginationBulletRender = (swiper, index, className) => {
                let pDesc = ''
                switch (index) {
                case 0:
                    pDesc = 'banner'
                    break
                case 1:
                    pDesc = '产品功能'
                    break
                case 2:
                    pDesc = '产品优势'
                    break
                case 3:
                    pDesc = '敬请期待'
                    break
                case 4:
                    pDesc = '空白'
                    break
                default:
                    break
                }
                return '<span class="' + className + '"><span class="pDesc">' + pDesc + '</span></span>'
            }

            this.swiperOption.onSlideChangeStart = swiper => {
                const activeIndex = swiper.activeIndex
                switch (activeIndex) {
                case 1:
                    this.navStyle = '#000000'
                    this.character = 'c_con_an'
                    break
                case 2:
                    this.navStyle = '#000825'
                    this.trait = 'tr_con_an'
                    break
                case 3:
                    this.navStyle = '#000000'
                    this.constreuce = 'con_con_an'
                    break
                case 4:
                    this.navStyle = '#172250'
                    this.partner = 'p_con_an'
                    break
                default:
                    this.navStyle = '#161823'
                    break
                }
            }
        },
        computed: {
        },
        filters: {
        },
        methods: {
        },
        components: {
            swiper,
            swiperSlide,
            VueNav,
            BannerWrap,
            Construction,
            Character,
            ProTrait,
            Partner,
            VueFooter
        }
    }
</script>
<style lang="sass">
	@import "./../../public/scss/modules/index";
</style>
