<!--
    @ contact
    @ author: tangyuan
    @ desc: 联系我们
    @ date: 07-12-07 pm
-->
<template lang="jade">
  section.cot_container
    div.cot_con_wrap
      article.cot_desc_con
        h3 联系我们
        p 公司地址：北京市海淀区首体南路9号主语商务中心3号楼
        p 市场联系电话：123456789
        p 市场联系邮箱：123456789@123.com
        h3 技术支持
        p 技术支持：联通
        p 技术支持电话：123456789
        p 技术支持邮箱：hqs-security@chinaunicom.cn
      BaiduMap
</template>

<script>
    import BaiduMap from './baiduMap'
    
    export default {
        name: 'contact',
        components: {
            BaiduMap
        }
    }
</script>

<style lang="sass" scoped>
   @import './../../public/scss/modules/contact.scss' 
</style>