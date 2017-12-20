<!--
    @ loading.vue
    @ author: tangyuan
    @ desc: loading
    @ date: 07-11-20 am
    @ lase-update: 07-12-20 am
-->
<template lang="jade">
  div.load_container(:style="{display: display}")
    div.l_wrap
      span
      span
      span
      span
      span
      span
      p.l_desc 云沃盾 loading...
</template>

<script>
    export default {
        name: 'loading',
        props: ['display']
    }
</script>

<style lang="sass" scoped>
    @import "./../public/scss/modules/loading.scss";
</style>