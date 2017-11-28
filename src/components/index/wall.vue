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
    div.brick.pres 攻击检测服务
      div.p_decs_wrap.d_w1
        div.p_d_arrow.arr_r
        p 攻击事件秒级发现，告警实时通知，定期提供流量与攻击报告
    div.t_bri.x13
    div.brick
    div.t_bri.x14
    div.brick.pres 流量封堵服务
      div.p_decs_wrap.d_w2
        div.p_d_arrow.arr_l
        p 攻击流量近源封堵，封堵范围（全网、国际、网间、区域）按需组合
    div.b_bri.y
    div.brick
    div.brick
    div.brick.h_bri
    div.brick.h_bri
    div.brick
    div.brick.pres 流量清洗服务
      div.p_decs_wrap.d_w3
        div.p_d_arrow.arr_b
        p 近源清洗与近目的清洗结合，原路径回注，客户无感知
    div.brick
    div.b_bri.y
    div.brick
    div.b_bri.y
    div.brick
    div.brick
    div.brick.h_bri.t 🔥
</template>
<script>
    export default {
        name: 'wall'
    }
</script>
<style lang="sass" scoped>
    @import "./../../public/scss/modules/wall.scss"
</style>