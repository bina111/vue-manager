import Mock from 'mockjs'

export default{
    getMenu:config=>{
        const {username,password} = JSON.parse(config.body);
        //判断密码和账号是否一致
        if(username === 'admin' && password === 'admin'){
            return {
                code:20000,
                data:{
                    menu:[
                        {
                            path:'/home',
                            name:'home',
                            label:'首页',
                            icon:'s-home',
                            url:'Home/index.vue'
                        },
                        {
                            path:'/mall',
                            name:'mall',
                            label:'商品管理',
                            icon:'video-play',
                            url:'Mall/index.vue'
                        },
                        {
                            path:'/user',
                            name:'user',
                            label:'用户管理',
                            icon:'user',
                            url:'User/index.vue'
                        },
                        {
                            label:'其他',
                            icon:'location',
                            children:[
                                {
                                    path:'/page1',
                                    name:'page1',
                                    label:'页面1',
                                    icon:'setting',
                                    url:'Other/pageOne.vue'
                                },
                                {
                                    path:'/page2',
                                    name:'page2',
                                    label:'页面2',
                                    icon:'setting',
                                    url:'Other/pageTwo.vue'
                                }
                            ]
                        }
                    ],
                    token:Mock.Random.guid(),
                    message: '获取成功'
                }
                
            }
        }
        else if(username === 'xiao' && password === 'xiao'){
            return {
                code: 20000,
                data:{
                    menu:[
                        {
                            path:'/home',
                            name:'home',
                            label:'首页',
                            icon:'s-home',
                            url:'Home/index.vue'
                        },
                        {
                            path:'/mall',
                            name:'mall',
                            label:'商品管理',
                            icon:'video-play',
                            url:'Mall/index.vue'
                        }
                    ],
                    token:Mock.Random.guid(),
                    message: '获取成功'
                }
                
            }
        }
        else{
            return {
                code: -999,
                data:{
                    message:'账号或密码错误'
                }
            }
        }
    }
}