<!--
    @ nav
    @ author: tangyuan
    @ desc: 顶导
    @ date: 07-11-06 pm
-->

<template lang="jade">
  header.h_con(:style="{background: navStyle}")
    router-link.l_link(to="/")(v-html="imgUrl")(@click.native="toTop")
    nav.wrap
      div.l_con
        router-link.i_link(to="/" ref="indexLink")(@click.native="toTop") 首页
      div.l_con(v-for="link in links")
        router-link.i_link(:to="link.href" ref="link") {{link.text}}
</template>
<script>
    export default {
        name: 'header',
        props: ['navStyle', 'imgUrl', 'swiperObj'],
        data() {
            return {
                links: [
                    {
                        href: '#',
                        text: '安全服务'
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
            this.linkActive()
        },
        methods: {
            linkActive() {
                const link = this.$refs.link,
                    href = window.location.href
                for (const i in link) {
                    if (href.indexOf('aboutUs') !== -1) link[2].$el.classList.add('active')
                    else this.$refs.indexLink.$el.classList.add('active')
                }
            },
            toTop() {
                const self = this
                if (self.swiperObj === undefined) return
                self.swiperObj.slideTo(0, 1000, () => {
                    self.navStyle = '161823'
                })
            }
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