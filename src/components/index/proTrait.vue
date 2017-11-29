<!--
    @ industry
    @ author: tangyuan
    @ desc: 行业描述部分，文案待定
    @ date: 07-11-09 pm
    @ last-update: 07-11-09 pm
-->

<template lang="jade">
  section.tr_container
    h1.tr_title 产品优势
    div.t_b_wrap
    article.tr_desc_con
      div.t_d_wrap
        div.t_d_i_bg
          i.iconfont &#xe678;
        div.t_d_con
          h5.t_d_title 强大可靠
          p.t_d_des 全网视野攻击检测、运营商级防护能力、分布式零死角精准防护
      div.t_d_wrap
        div.t_d_i_bg
          i.iconfont &#xe60b;
        div.t_d_con
          h5.t_d_title 便捷高效
          p.t_d_des 用户零配置零改造、防护任务便捷生效、自助式产品服务
      div.t_d_wrap
        div.t_d_i_bg
          i.iconfont &#xe973;
        div.t_d_con
          h5.t_d_title 智能开放
          p.t_d_des 定制化防护方案、智能策略选择、API能力开放
      div.t_d_wrap
        div.t_d_i_bg
          i.iconfont &#xe628;
        div.t_d_con
          h5.t_d_title 专业无忧
          p.t_d_des 行业专家运营团队、线上线下迅速响应、7X24小时客户服务

</template>
<script>
    import Vue from 'vue'
    export default{
        name: 'proTrait',
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
        },
        watch: {

        },
        components: {

        }
    }
</script>
<style lang="sass" scoped>
  @import "./../../public/scss/modules/proTrait.scss";
</style>
