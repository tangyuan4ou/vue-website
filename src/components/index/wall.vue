<!--
    @ wall
    @ author: tangyuan
    @ desc: 3d墙
    @ date: 07-11-27 pm
    @ last-update: 07-11-27 am
-->
<template lang="jade">
  div.wall_wrap
    div.brick.h_bri
    div.t_bri.x11
    div.b_bri.y
    div.brick
    div.t_bri.x12
    div.brick
    div.t_bri.x13
    div.brick
    div.b_bri.y
    div.brick
    div.brick.h_bri
    div.brick.h_bri
    div.b_bri.y
    div.brick
    div.brick
</template>
<script>
    export default {
        name: 'wall'
    }
</script>
<style lang="sass" scoped>
    @import "./../../public/scss/modules/wall.scss"
</style>