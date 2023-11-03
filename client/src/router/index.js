import Vue from 'vue'
import Router from 'vue-router'
// import BookIndex from '@/components/Book/Index'
// import BookCreate from '@/components/Book/CreateBook'
// import BookEdit from '@/components/Book/EditBook'
// import BookShow from '@/components/Book/ShowBook'
// import HelloWorld from '@/components/HelloWorld'

import BeverageCreate from '@/components/Beverage/CreateBeverage'
import BeverageEdit from '@/components/Beverage/EditBeverage'
import BeverageIndex from '@/components/Beverage/Index'
import BeverageShow from '@/components/Beverage/ShowBeverage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/beverages',
      name: 'beverages',
      component: BeverageIndex
    },
    {
      path: '/beverage/create',
      name: 'beverage-create',
      component: BeverageCreate
    },
    {
      path: '/beverage/edit/:beverageId',
      name: 'beverage-edit',
      component: BeverageEdit
    },
    {
      path: '/beverage/:beverageId',
      name: 'beverage-show',
      component: BeverageShow
    }
  ]
})
