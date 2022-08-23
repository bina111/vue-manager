<template>
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="form-container">
        <h3 class="form-title">系统登录</h3>
        <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="login-submit">
            <el-button type="primary" @click="login" class="login-submit">登录</el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
// import Mock from 'mockjs'
import { getMenu } from '../../../api/data';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Login',
    data() {
        return {
            form:{
                username:'',
                password:''
            },
            rules:{
                username: [
                    { required:true, message:'请输入用户名', trigger: 'blur' },
                    {
                        min: 3,
                        message: '用户名长度不能小于3位',
                        trigger: 'blur'
                    }
                ],
                password: [
                    { required:true, message:'请输入密码', trigger: 'blur' },
                ],
                
            }
        }
    },
    methods:{
        login(){
            getMenu(this.form).then(res=>{
                if(res.data.code === 20000){
                    this.$store.commit('clearMenu');
                    this.$store.commit('setMenu',res.data.data.menu);
                    this.$store.commit('setToken',res.data.data.token);
                    this.$store.commit('addMenu',this.$router)
                    this.$router.push({
                        name:'home'
                    })
                }else{
                    this.$message.warning(res.data.data.message)
                }
            })
        },
        resetForm(){
            this.form = {
                username:'',
                password:''
            }
        },
    }
}
</script>

<style lang="less" scoped>
    .form-container{
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
        width: 350px;
        background-clip: padding-box;
        background-color: #fff;
        border-radius: 15px;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .form-title{
        margin: 0 auto 40px auto;
        text-align: center;
        color: #505458
    }
    .login-submit{
        margin: 10px auto 0 auto;
    }
</style>