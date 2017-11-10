<!--
    @ character
    @ author: tangyuan
    @ desc: 功能描述部分，文案待定
    @ date: 07-11-09 pm
    @ last-update: 07-11-09 pm
-->

<template lang="jade">
    div.c_container
        h1 产品优势
        ul.c_wrap
            li.char(v-for="char in chars")
                img.c_img(src="./../../public/imgs/user.png")
                h2.c_desc {{char.desc}}
</template>
<script>
    import Vue from 'vue'
    export default{
        name: 'charecter',
        data() {
            return {
                chars: [
                    {
                        desc: '进源清洗'
                    },
                    {
                        desc: '分区域封堵'
                    },
                    {
                        desc: 'T级防护宽带'
                    },
                    {
                        desc: '用户自服务'
                    },
                    {
                        desc: '开放api'
                    },
                    {
                        desc: '无需配置'
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
  @import "./../../public/scss/modules/character.scss";
</style>