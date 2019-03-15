import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home' //@表示src
import Content from '@/components/Content'
import Page from '@/components/Page'
import About from '@/components/About'
import Footer from '@/components/Footer'
import F404 from '@/components/F404'
import Links from '@/components/Links'
import ElementUI from 'element-ui' //element-ui
import 'element-ui/lib/theme-chalk/index.css' 
import VueResource from 'vue-resource' //请求数据

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode:'history',  //使用history防止url中出现#
  routes: [
    {
      path: '/',
      components:{
        Vhome:Home,
        Vfooter:Footer,
      }
    },
    {
      path: '/Home',
      component: Home,
    },
    {
      path: '/Links',
      component: Links,
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Footer',
      component: Footer
    },
    {
      path: '/Page',
      component:Page,
      children:[
        {path:'/Page/Content', component:Content},
      ]
    },
    { path: '/F404',  component:F404 },
    { path: '*', redirect: '/F404' },   /*默认跳转路由*/
   
  ]
})
