import Cookie from 'js-cookie'
export default {
    state:{
        isCollapse: false,
        tableList:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'home'
            }
        ],
        currentMenu:null,
        menu:[]
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            if(val.name !== 'home'){
                state.currentMenu = val;
                const idx = state.tableList.findIndex(item=>item.name === val.name);
                if(idx < 0){
                    state.tableList.push(val);
                }
            }else{
                state.currentMenu = null;
            }
        },
        closeMenu(state,tag){
            const idx = state.tableList.findIndex(item=>item.name === tag.name);
            state.tableList.splice(idx,1);
        },
        setMenu(state,val){
            state.menu = val;
            Cookie.set('menu',JSON.stringify(val));
        },
        clearMenu(state){
            state.menu = [];
            Cookie.remove('menu')
        },
        //路由动态添加
        addMenu(state,router){
            if(!Cookie.get('menu')){
                return ;
            }
            const menu = JSON.parse(Cookie.get('menu'));
            state.menu = menu;
            let menuArray = [];
            menu.forEach(item=>{
                if(item.children){
                    item.children = item.children.map(item=>{
                        item.component = ()=>import(`../views/${item.url}`);
                        return item;
                    });
                    menuArray.push(...item.children);
                }else{
                    item.component = ()=>import(`../views/${item.url}`);
                    menuArray.push(item);
                }
            });
            //路由动态添加
            menuArray.forEach(item=>{
                router.addRoute('Main',item)
            })
        }
    }
}