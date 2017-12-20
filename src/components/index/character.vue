<!--
    @ character
    @ author: tangyuan
    @ desc: 产品功能介绍部分
    @ date: 07-11-09 pm
    @ last-update: 07-11-22 am
-->

<template lang="jade">
  section.c_container(:style="bgImg")
    div.c_bg
    h1.c_title DDoS产品功能介绍
    article.c_content
      div.c_des_wrap
        div.c_des_title
          h3 攻击检测服务
          p 攻击事件秒级发现，告警实时通知，定期提供流量与攻击报告
        div.c_des
          h5 告警方式：
          p.n_indent 网页告警、邮件通知、短信通知、自动语音拨打
        div.c_des
          h5 攻击检测类型：
          p SYN Flood、ICMP Flood、UDP Flood、TCP fragmentation、Stream Flood、Land Attack等
        div.c_des
          h5 流量分析报告：
          p 定期（周期可定制）为客户提供客户地址流量分析报表、攻击情况报告、网络安全态势分析报告。
      div.c_des_wrap
        div.c_des_title
          h3 流量封堵服务
          p 攻击流量近源封堵，封堵范围（全网、国际、网间、区域）按需组合
        div.c_des
          h5 标准版：
          p 全网流量封堵业务，将所有通过联通网络去往用户的流量进行封堵。
        div.c_des
          h5 高级版：
          p 国际网间流量封堵
          p 国内网间流量封堵
          p 联通国内流量封堵
          p 指定区域流量封堵
      div.c_des_wrap
        div.c_des_title
          h3 流量清洗服务
          p 近源清洗与近目的清洗结合，原路径回注，客户无感知
        div.c_des
          h5 清洗原理：
          p 近源清洗与近目的清洗结合，原路径回注，客户无感知
        div.c_des
          h5 清洗方式：
          p 近源清洗：在骨干网靠近攻击源的一侧进行流量清洗，适合大流量攻击防护
          p 近目的清洗：在骨干网靠近被攻击的目标网络一侧进行流量清洗，适合普通流量攻击防护
          p 在实际任务执行中，两种清洗方式结合使用，以达到最佳防护效果
</template>
<script>
    export default {
        name: 'charecter',
        data() {
            return { bgImg: { backgroundImage: `url( ${require('../../public/imgs/3.png')} )` } }
        }
    }
</script>
<style lang="sass" scoped>
  @import "./../../public/scss/modules/character.scss";
</style>