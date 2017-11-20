<!--
    @ character
    @ author: tangyuan
    @ desc: 行业描述部分，文案待定
    @ date: 07-11-09 pm
    @ last-update: 07-11-09 pm
-->

<template lang="jade">
    div.in_container
        h1 行业解决方案
        ul.in_wrap
            li.industry( v-for="indu in indus" )
                img.in_img( :src="indu.url" )
                h2.in_desc {{indu.desc}}
</template>
<script>
    import Vue from 'vue'
    export default{
        name: 'industry',
        data() {
            return {
                indus: [
                    {
                        url: '../static/imgs/logo.png',
                        desc: '政府'
                    },
                    {
                        desc: '银行'
                    },
                    {
                        desc: '云服务商'
                    },
                    {
                        desc: '游戏服务商'
                    },
                    {
                        desc: '教育'
                    },
                    {
                        desc: '能源'
                    },
                    {
                        desc: '航空航天'
                    },
                    {
                        desc: '传媒'
                    }
                ]
            }
        },
        mounted() {
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
  @import "./../../public/scss/modules/industry.scss";
</style>