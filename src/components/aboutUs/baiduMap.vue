<!--
    @ baiduMap
    @ author: tangyuan
    @ desc: 百度地图
    @ date: 07-12-07 pm
-->
<template lang="jade">
  div#allmap.allmap
</template>

<script>
    import BMap from 'BMap'
    
    export default {
        name: 'baiduMap',
        data() {
            return {
            }
        },
        mounted() {
            this.ready()
        },
        methods: {
            ready() {
                const opts = {
                    width: 80,
                    height: 30,
                    title: '中讯邮电'
                }
                const map = new BMap.Map('allmap'),
                    point = new BMap.Point(116.331384, 39.939534),
                    marker = new BMap.Marker(point),
                    infoWindow = new BMap.InfoWindow('北京市海淀区主语国际三号楼', opts)
                map.centerAndZoom(point, 14)
                map.addControl(new BMap.NavigationControl())
                map.addControl(new BMap.ScaleControl())
                map.addOverlay(marker)
                map.openInfoWindow(infoWindow, map.getCenter())
            }
        }
    }
</script>

<style lang="scss" scoped>
    .allmap {
        display: inline-block;
        width: 501px;
        height: 400px;
    }
</style>