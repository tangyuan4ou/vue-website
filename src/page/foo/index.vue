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
    import VueFooter from '~/components/footer'
    
    export default{
        name: 'index',
        data() {
            return {
                style: 'a',
                swiperOption: {
                    direction: 'vertical',
                    speed: 500,
                    height: window.innerHeight - 80,
                    mousewheelControl: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                }
            }
        },
        created() {
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
            VueFooter
        }
    }
</script>
<style lang="sass" scoped>
	@import "./../../public/scss/modules/index";
</style>
