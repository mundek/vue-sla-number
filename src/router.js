import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import Quiz from './views/Quiz.vue'
import Results from './views/Results.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Start
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    }
  ]
})
