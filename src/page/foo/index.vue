<!--
    @ index
    @ author: tangyuan
    @ desc: 首页轮播
    @ date: 07-11-06 am
-->
<template lang="jade">
    div.i_container
        VueNav(:navStyle="navStyle")(:imgUrl='imgUrl')(:swiperObj="swiperObj")
        swiper(:options="swiperOption" ref="mySwiper")
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
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    import Loading from '~/components/loading'
    import VueNav from '~/components/nav'
    import BannerWrap from '~/components/index/banner'
    import Character from '~/components/index/character'
    import ProTrait from '~/components/index/proTrait'
    import Construction from '~/components/index/construction'
    import Partner from '~/components/index/partner'
    import VueFooter from '~/components/footer'
    
    export default {
        name: 'index',
        data() {
            return {
                display: 'block',
                navStyle: '#161823',
                imgUrl: `<img class="logo" src=${require('./../../public/imgs/logo.png')} ></img>`,
                character: '',
                trait: '',
                constreuce: '',
                partner: '',
                swiperObj: '',
                swiperOption: {
                    direction: 'vertical',
                    speed: 500,
                    scrollbarHide: true,
                    scrollbarDraggable: false,
                    height: window.innerHeight > 550 ? window.innerHeight - 80 : 550,
                    mousewheelControl: true,
                    mousewheelForceToAxis: true,
                    mousewheelInvert: true,
                    pagination: '.swiper-pagination',
                    keyboardControl: true,
                    paginationClickable: true
                }
            }
        },
        created() {
            document.body.classList.remove('bodyScroll')
            document.body.classList.add('bodyHidden')
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            this.init()
            this.swiperObj = this.swiper
        },
        methods: {
            init() {
                window.onresize = () => {
                    this.swiperOption.height = window.innerHeight > 550 ? window.innerHeight - 80 : 550
                }
                this.paginationBulletRender()
                this.onSlideChangeStart()
            },
            paginationBulletRender() {
                this.swiperOption.paginationBulletRender = (swiper, index, className) => {
                    let pDesc = ''
                    switch (index) {
                    case 0: pDesc = 'banner'
                        break
                    case 1: pDesc = '产品功能'
                        break
                    case 2: pDesc = '产品优势'
                        break
                    case 3: pDesc = '敬请期待'
                        break
                    case 4: pDesc = '合作伙伴'
                        break
                    default:
                        break
                    }
                    return `<span class="${className}"><span class="pDesc">${pDesc}</span></span>`
                }
            },
            onSlideChangeStart() {
                this.swiperOption.onSlideChangeStart = swiper => {
                    const activeIndex = swiper.activeIndex
                    switch (activeIndex) {
                    case 1: this.navStyle = '#000000'; this.character = 'c_con_an'
                        break
                    case 2: this.navStyle = '#000825'; this.trait = 'tr_con_an'
                        break
                    case 3: this.navStyle = '#000000'; this.constreuce = 'con_con_an'
                        break
                    case 4: this.navStyle = '#172250'; this.partner = 'p_con_an'
                        break
                    default: this.navStyle = '#161823'
                        break
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide,
            Loading,
            VueNav,
            BannerWrap,
            Character,
            ProTrait,
            Construction,
            Partner,
            VueFooter
        }
    }
</script>
<style lang="sass">
	@import "./../../public/scss/modules/index";
    .bodyHidden {
        overflow-y: hidden;
    }
    .swiper-container {
        overflow: hidden;
    }
</style>
