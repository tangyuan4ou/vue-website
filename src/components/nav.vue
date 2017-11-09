<!--
    @ nav
    @ author: tangyuan
    @ desc: 顶导，文案待定，首页轮播样式变化待定
    @ date: 07-11-06 pm
    @ last-update: 07-11-06 pm
-->

<template lang="jade">
  header.h_con 
    router-link.l_link(to="#")
      img.logo(src="./../public/imgs/logo.png")
    div.wrap
      div.l_con(v-for="link in links")
        router-link.i_link(to="#" ref="link") {{link.text}}
</template>
<script>
    import Vue from 'vue'
    export default{
        name: 'header',
        data() {
            return {
                links: [
                    { text: '首页' },
                    { text: '防护原理' },
                    { text: '安全态势' },
                    { text: '联系我们' }
                ]
            }
        },
        props: ['navStyle'],
        mounted() {
            const link = this.$refs.link
            for (const i in link) {
                link[0].$el.classList.add('active')
                console.log(link[i].$el)
            }
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
  @import "../public/scss/modules/nav.scss";
</style>