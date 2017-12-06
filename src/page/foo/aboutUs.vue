<template lang="jade">
    div.ab_container
        VueNav(class="w_link")(:navStyle="navStyle")(:logoSrc='logoSrc')
        About
</template>
<script>
    import Vue from 'vue'
    import VueNav from '~/components/nav'
    import About from '~/components/aboutUs/about'
    export default{
        name: 'aboutUs',
        data() {
            return {
                logoSrc: 'bLogo',
                navStyle: '#f3f4f8'
            }
        },
        created() {
        },
        mounted() {
        },
        computed: {
        },
        filters: {

        },
        methods: {
        },
        components: {
            VueNav,
            About
        }
    }
</script>
<style lang="sass" scoped>
</style>