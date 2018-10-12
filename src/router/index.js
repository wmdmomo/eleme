import Vue from 'vue'
import Router from 'vue-router'
import food from '@/components/food/food.vue'
import common from '@/components/common/common.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/food',
      component: food
    },
    {
      path: '/common',
      component: common
    }
  ]
})
