import VueRouter from "vue-router"

import Main from '../views/Main.vue'

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'Main',
            redirect:'/home',
            component:Main,
            children:[
                // {
                //     path:'/home',
                //     name:'home',
                //     component:()=>import('../views/Home/index.vue')
                // },
                // {
                //     path:'/user',
                //     name:"user",
                //     component:()=>import('../views/User/index.vue')
                // },
                // {
                //     path:'/mall',
                //     name:'mall',
                //     component:()=>import('../views/Mall/index.vue')
                // },
                // {
                //     path:'/page1',
                //     name:'page1',
                //     component:()=>import('../views/Other/pageOne.vue')
                // },
                // {
                //     path:'/page2',
                //     name:'page2',
                //     component:()=>import('../views/Other/pageTwo.vue')
                // }
              
            ]
        },
        {
            path:'/login',
            name: 'login',
            component:()=>import('../views/Login/login.vue')
        }
    ]
})
