<!--
    @ foo
    @ author: tangyuan
    @ desc: 网站入口
    @ date: 07-11-06 am
-->

<template lang="jade">
  div.main
    Loading(:display="display")
    router-view
</template>
<script>

import Vue from 'vue'
import Loading from './../components/loading.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

export default {
    name: 'foo',
    data() {
        return {
            display: 'block'
        }
    },
    components: {
        Loading
    },
    created() {
        const self = this
        const time = setTimeout(() => {
            self.display = 'none'
        }, 1500)
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
    min-width: $min-width;
    height: 100%;
}
</style>
