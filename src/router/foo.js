import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// System.import()来做懒加载，没有使用用require
const Index = resolve => import(/* webpackChunkName: "foo-index-[index]" */ '~/page/foo/index.vue')
const AboutUs = resolve => import(/* webpackChunkName: "foo-aboutUs-[index]" */ '~/page/foo/aboutUs.vue')

const routes = [
    { path: '/', component: Index, name: 'index' },
    { path: '/aboutUs', component: AboutUs, name: 'aboutUs' }
]

export default new VueRouter({
    routes
})