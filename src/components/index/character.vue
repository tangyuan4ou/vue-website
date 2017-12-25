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
      div.c_wrap
        div.c_des_wrap(v-for="desc in desces")
          div.c_des_title
            h3 {{desc.title}}
            p {{desc.des}}
          div.c_des
            h5 {{desc.text1.title}}
            p {{desc.text1.des}}
          div.c_des
            h5 {{desc.text2.title}}
            span(v-for="des in desc.text2.des") {{des.de}}
</template>
<script>
    export default {
        name: 'charecter',
        data() {
            return {
                bgImg: { backgroundImage: `url( ${require('../../public/imgs/3.png')} )` },
                desces: [
                    {
                        title: '攻击检测服务',
                        des: '攻击事件秒级发现，告警实时通知，定期提供流量与攻击报告',
                        text1: {
                            title: '告警方式：',
                            des: '网页告警、邮件通知、短信通知、自动语音拨打'
                        },
                        text2: {
                            title: '流量分析报告：',
                            des: [
                                { de: '客户地址流量分析报表' },
                                { de: '攻击情况报告' },
                                { de: '网络安全态势分析报告' }
                            ]
                        }
                    },
                    {
                        title: '流量封堵服务',
                        des: '攻击流量近源封堵，封堵范围（全网、国际、网间、区域）按需组合',
                        text1: {
                            title: '标准版：',
                            des: '全网流量封堵业务'
                        },
                        text2: {
                            title: '高级版：',
                            des: [
                                { de: '国际网监流量封堵' },
                                { de: '国内网监流量封堵' },
                                { de: '联通国内流量封堵' },
                                { de: '指定区域流量封堵' }
                            ]
                        }
                    },
                    {
                        title: '流量清洗服务',
                        des: '近源清洗与近目的清洗结合，原路径回注，客户无感知',
                        text1: {
                            title: '清洗原理：',
                            des: '将用户流量重定向到清洗设备，清洗后回注正常流量到原网络中，用户无感知'
                        },
                        text2: {
                            title: '清洗方式：',
                            des: [
                                { de: '两种清洗方式结合' },
                                { de: '近目的清洗' },
                                { de: '近源清洗' }
                            ]
                        }
                    }
                ]
            }
        }
    }
</script>
<style lang="sass" scoped>
  @import "./../../public/scss/modules/character.scss";
</style>