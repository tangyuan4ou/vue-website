<!--
    @ character
    @ author: tangyuan
    @ desc: DDoS产品功能介绍部分
    @ date: 07-11-09 pm
    @ last-update: 07-11-21 pm
-->

<template lang="jade">
    div.liu_container
        div.liu_wrap
            h1.an1(v-html="isHtml")
            h1.an2 流量封堵服务
            h1.an3 流量清洗服务
            div(@click.once="touch") touchMe
</template>
<script>
    import Vue from 'vue'
    export default{
        name: 'liuliang',
        data() {
            return {
                isHtml: '<p style="color: red">ppppp</p>'
            }
        },
        mounted() {
        },
        methods: {
            touch: () => {
                alert('aaaa')
            }
        },
        watch: {
        },
        components: {

        }
    }
</script>
<style lang="sass" >
  @import "./../../public/scss/modules/liuliang.scss";
</style>