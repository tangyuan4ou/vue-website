<!--
    @ proTrait
    @ author: tangyuan
    @ desc: 产品优势部分
    @ date: 07-11-09 pm
    @ last-update: 07-11-29 pm
-->

<template lang="jade">
  section.tr_container(:style="bgImg")
    h1.tr_title 产品优势
    div.t_b_wrap
    article.tr_desc_con
      div.t_d_wrap(v-for="desc in desces")
        div.t_d_i_bg
          i.iconfont {{desc.icon}}
        div.t_d_con
          h5.t_d_title {{desc.title}}
          p.t_d_des {{desc.des}}
</template>

<script>
    export default {
        name: 'proTrait',
        data() {
            return {
                bgImg: { backgroundImage: `url( ${require('./../../public/imgs/tBg.png')} )` },
                desces: [
                    {
                        icon: '',
                        title: '强大可靠',
                        des: '全网视野攻击检测、运营商级防护能力、分布式零死角精准防护'
                    },
                    {
                        icon: '',
                        title: '便捷高效',
                        des: '用户零配置零改造、防护任务便捷生效、自助式产品服务'
                    },
                    {
                        icon: '',
                        title: '智能开发',
                        des: '定制化防护方案、智能策略选择、API能力开放'
                    },
                    {
                        icon: '',
                        title: '专业无忧',
                        des: '行业专家运营团队、线上线下迅速响应、7X24小时客户服务'
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
  @import "./../../public/scss/modules/proTrait.scss";
</style>
