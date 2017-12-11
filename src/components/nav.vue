<!--
    @ nav
    @ author: tangyuan
    @ desc: 顶导
    @ date: 07-11-06 pm
    @ last-update: 07-12-05 pm
-->

<template lang="jade">
  header.h_con(:style="{background: navStyle}")
    router-link.l_link(to="/")(v-html="imgUrl")
    nav.wrap
      div.l_con(v-for="link in links")
        router-link.i_link(:to="link.href" ref="link") {{link.text}}
</template>
<script>
    export default{
        name: 'header',
        props: ['navStyle', 'imgUrl'],
        data() {
            return {
                links: [
                    {
                        href: '/',
                        text: '首页'
                    },
                    {
                        href: '#',
                        text: '防护原理'
                    },
                    {
                        href: '#',
                        text: '安全态势'
                    },
                    {
                        href: 'aboutUs',
                        text: '关于我们'
                    }
                ]
            }
        },
        mounted() {
            const link = this.$refs.link,
                href = window.location.href
            for (const i in link) {
                if (href.indexOf('aboutUs') !== -1) {
                    link[3].$el.classList.add('active')
                } else {
                    link[0].$el.classList.add('active')
                }
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