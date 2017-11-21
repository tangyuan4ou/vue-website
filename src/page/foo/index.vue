<!--
    @ index
    @ author: tangyuan
    @ desc: 首页轮播，目前完成顶导、banner。其他待定
    @ date: 07-11-06 am
    @ last-update: 07-11-08 pm
-->
<template lang="jade">
    div.i_container
        VueNav(:navStyle="style")
        swiper(:options="swiperOption" ref="mySwiper")
            swiper-slide 
                BannerWrap
            swiper-slide
                Character 
            swiper-slide 
                Liuliang(ref='liuliang')
            swiper-slide 
                Industry
            swiper-slide.s_footer 
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
    import Liuliang from '~/components/index/liuliang'
    import Character from '~/components/index/character'
    import Industry from '~/components/index/industry'
    import VueFooter from '~/components/footer'
    
    export default{
        name: 'index',
        data() {
            return {
                style: 'a',
                swiperOption: {
                    direction: 'vertical',
                    speed: 500,
                    scrollbarHide: true,
                    height: window.innerHeight - 80,
                    mousewheelControl: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    paginationBulletRender: (swiper, index, className) => {
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
                            pDesc = '行业解决方案'
                            break
                        case 4:
                            pDesc = '空白'
                            break
                        default:
                            break
                        }
                        return '<span class="' + className + '"><span class="pDesc">' + pDesc + '</span></span>'
                    },
                    onSlideChangeStart: swiper => {
                        const activeIndex = swiper.activeIndex
                        if (activeIndex === 2) {
                            this.$refs.liuliang.$el.classList.add('liuliangAn')
                        } else {
                            this.$refs.liuliang.$el.classList.remove('liuliangAn')
                        }
                    }
                }
            }
        },
        created() {
            document.documentElement.style.overflowY = 'hidden'
        },
        mounted() {
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
            Liuliang,
            Character,
            Industry,
            VueFooter
        }
    }
</script>
<style lang="sass">
	@import "./../../public/scss/modules/index";
</style>
