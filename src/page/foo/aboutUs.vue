<template lang="jade">
    div.ab_container
        VueNav(class="w_link")(:navStyle="navStyle")(:imgUrl='imgUrl')
        About
        Case
        Contact
</template>
<script>
    import VueNav from '~/components/nav'
    import About from '~/components/aboutUs/about'
    import Case from '~/components/aboutUs/case'
    import Contact from '~/components/aboutUs/contact'

    export default {
        name: 'aboutUs',
        data() {
            return {
                imgUrl: `<img class="logo" src=${require('./../../public/imgs/bLogo.png')} ></img>`,
                navStyle: '#f3f4f8'
            }
        },
        created() {
            document.body.classList.remove('bodyHidden')
            document.body.classList.add('bodyScroll')
        },
        components: {
            VueNav,
            About,
            Case,
            Contact
        }
    }
</script>
<style lang="sass">
.bodyScroll {
    overflow-y: auto;
}
</style>