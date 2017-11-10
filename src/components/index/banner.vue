<!--
    @ banner.vue
    @ author: tangyuan
    @ desc: index banner, canvas, 文案待定
    @ date: 07-11-08 am
    @ lase-update: 07-11-08 am
-->
<template lang="jade">
    div.b_wrap
        canvas#canvas
        div.b_con(ref="bCon")
            h1.title {{title}}
            p.desc {{desc}}
</template>
<script>
    import Vue from 'vue'
    import { canvasLoad } from '~/public/js/canvas'
    export default{
        name: 'BannerWrap',
        data() {
            return {
                title: '云沃盾',
                desc: '运营商骨干级网络DDoS安全防护服务'
            }
        },
        created() {
            canvasLoad()
        },
        mounted() {
            const top = window.innerHeight / 2
            this.$refs.bCon.style.top = `${top - 120}px`
        },
        methods: {

        },
        watch: {

        },
        components: {

        }
    }
</script>
<style lang="sass" >
@import './../../public/scss/modules/banner'
</style>