<template>
  <el-container style="height: 100%;">
    <el-aside style="width:auto">
        <common-aside></common-aside>
    </el-aside>
    <el-container>
        <el-header>
            <common-header></common-header>
            <common-tag></common-tag>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
    </el-container>
</template>

<script>

import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'

export default {
    components: { CommonAside, CommonHeader, CommonTag},
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Main',
    data() {
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
    .el-header{
        width: 100%;
        background-color: #333;
        margin-bottom: 45px;
    }
    .el-main{
        padding-top: 0;
    }

</style>