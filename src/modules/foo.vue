<!--
    @ foo
    @ author: tangyuan
    @ desc: 网站入口
    @ date: 07-11-06 am
    @ last-update: 07-11-08 pm
-->

<template lang="jade">
    div.main
        div.content
            router-view
</template>
<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

export default {
    name: 'foo',
    data() {
        return {
        }
    },
    components: {
    },
    methods: {
    },
    watch: {
        '$route'(to, from) {
            document.title = '云服务'
        }
    }
}
</script>
<style lang="sass">
@import './../public/scss/style';
.main{
    width: 100%;
    min-width: 1200px;
    height: 100%;
    .content{
        height: auto;
        width: 100%;
    }
}
</style>
