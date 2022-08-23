import axios from 'axios'
import config from '../config'

let baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl : config.baseUrl.pro;

class httpRequest {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    getInsideConfig(){
        const config = {
            baseUrl:this.baseUrl,
            header:{}
        }
        return config;
    }

    //设置拦截器
    interceptors(instance){
        instance.interceptors.request.use(function(config){
            return config;
        },function(error){
            return Promise.reject(error);
        });
        instance.interceptors.response.use(function(response){
            return response;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        })
    }

    //创建请求
    request(options){
        const instance = axios.create();
        // console.log("instance",typeof instance);
        options = {...this.getInsideConfig() , ...options} ;
        this.interceptors(instance);
        return instance(options);
    }
}

export default new httpRequest(baseUrl)
