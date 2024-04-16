import { createWebHistory, createRouter } from 'vue-router'
import Users from './pages/users/users.vue'
import Articles from './pages/articles/articles.vue'
import SingleUser from './pages/users/single-user.vue'
import SingleArticle from './pages/articles/single-article.vue'
import AllGoals from './pages/goals/all-goals.vue'
import SingleGoal from './pages/goals/single-goal.vue'
import UserFooter from './pages/users/userFooter.vue'
import ArticleFooter from './pages/articles/articleFooter.vue'

const routes = [
    {
        path: '',
        redirect: '/users',
    },
    {
        path: '/users',
        components: { default: Users, footer: UserFooter },
        beforeEnter: (to, from,next) => {
            console.log('before enter')
            next()
          },
    },
    {
        path: '/users/:id',
        component: SingleUser,
    },
    {
        name: 'named-article',
        path: '/article',
        components: { default: Articles, footer: ArticleFooter },
        // children : [
        //     {
        //         path : '/:id',
        //         component : SingleArticle,
        //         props : true
        //     }
        // ]
    },
    {
        path: '/article/:id',
        component: SingleArticle,
        props: true
    },
    {
        path: '/goals',
        component: AllGoals,
        children: [
            {
                path: '/goals/:id',
                component: SingleGoal,
                props: true
            }
        ]
    },
    {
        path: '/:notFound(.*)',
        redirect: '/users'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log("to Postion",to)
        console.log("from Postion",from)
        console.log("saved Postion",savedPosition)
        if(savedPosition){
            return savedPosition
        }
        return { to : 0, from : 0 }
    }
})
router.beforeEach((to,from,next)=>{
    console.log('BeforeEach')
    next()
})
router.beforeResolve(async to => {
    console.log('BeforeResolve')
    if (to?.meta?.requiresCamera) {
      try {
        // await askForCameraPermission()
      } catch (error) {

      }
    }
  })
router.afterEach((to, from) => {
    console.log('afterEach')
  })
export default router