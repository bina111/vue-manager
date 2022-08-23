<template>
  <header>
    <div class="l-content">
        <el-button @click="handleMenu" plain size="mini" icon="el-icon-menu"></el-button>
        <!-- <h3 style="color: #fff;">首页</h3> -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{path: item.path}">{{item.label}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="r-content">
        <el-dropdown trigger="click" size="mini">
            <span>
                <img :src="userImg" class="user">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
    data() {
        return {
            userImg:require("../assets/images/user.png")
        }
    },
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu')
        },
        logout(){
            this.$store.commit('delToken');
            this.$store.commit('clearMenu');
            this.$router.push({ name: 'login'})
        }
    },
    computed:{
        ...mapState({
            tags: state=> state.tab.tableList
        })
    }
}
</script>

<style lang="less" scoped>
    header{
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .l-content{
        display: flex;
        align-items: center;
        .el-button{
            margin-right: 20px;
        }
    }

    .r-content{
        .user{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

</style>