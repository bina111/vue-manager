import Cookie from 'js-cookie'
export default{
    state:{
        token: ''
    },
    actions:{

    },
    mutations:{
        setToken(state,val){
            state.token = val;
            Cookie.set('token',val);
        },
        delToken(state){
            state.token = '',
            Cookie.remove('token');
        },
        getToken(state){
            state.token = state.token || Cookie.get('token');
        }
    }
}