import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Index from '@/components/Index'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
		      {
		    	path:'',
		    	name:'Home',
		    	component:Home
		    }
      ]
    }
  ]
})
