import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/canvas1',
      children: [{
        path: '/canvas1',
        name: 'canvas1',
        meta: {
          title: '基础demo'
        },
        component: () => import('./views/canvas/canvas1.vue')
      },
      {
        path: '/arrowhead',
        name: 'arrowhead',
        meta: {
          title: '箭头'
        },
        component: () => import(/* 箭头 */'./views/canvas/arrowhead.vue')
      },
      {
        path: '/regularPolygon',
        name: 'regularPolygon',
        meta: {
          title: '多边形'
        },
        component: () => import(/* 多边形 */'./views/canvas/regularPolygon.vue')
      },
      {
        path: '/star5',
        name: 'star5',
        meta: {
          title: '五角星'
        },
        component: () => import(/* 五角星 */'./views/canvas/star.vue')
      },
      {
        path: '/painter',
        name: 'painter',
        meta: {
          title: '调色板'
        },
        component: () => import(/* 调色板 */'./views/canvas/painter.vue')
      },
      {
        path: '/curve',
        name: 'curve',
        meta: {
          title: '曲线'
        },
        component: () => import(/* 圆 */'./views/canvas/curve.vue')
      },
      {
        path: '/pieChart',
        name: 'pieChart',
        meta: {
          title: '饼图'
        },
        component: () => import(/* 圆 */'./views/canvas/pieChart.vue')
      },
      {
        path: '/heart',
        name: 'heart',
        meta: {
          title: '心形'
        },
        component: () => import(/* 圆 */'./views/canvas/heart.vue')
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
