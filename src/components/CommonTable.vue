<template>
    <div class="common-table">
         <el-table
        :data="tableData" height="90%" stripe>
            <el-table-column
                show-overflow-tooltip
                v-for="item in tableLabel"
                :key="item.label"
                :prop="item.model"
                :label="item.label"
                :width="item.width?item.width:125">
            </el-table-column>
            <el-table-column
            label="操作"
            min-width="180">
            <template slot-scope="scope">
                <el-button size="mini" @click="editUser(scope.row)">编辑</el-button>
                <el-button @click="deleteUser(scope.row)" type="danger" size="mini">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="picker"
            layout="prev, pager, next"
            :total="config.total"
            :current-page.sync="config.page"
            @current-change="changePage"
            :page-size="20">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'CommonTable',
    props:{
        tableData: Array,
        tableLabel:Array,
        config:Object
    },
    methods:{
        editUser(row){
            this.$emit('edit',row)
        },
        deleteUser(row){
            this.$emit('delete',row)
        },
        changePage(page){
            this.$emit('changePage',page)
        }
    }
}
</script>

<style lang="less" scoped>
    .common-table{
        height: calc(100%-62px);
        background-color: #fff;
        position: relative;
        .picker{
            position: absolute;
            bottom: 0;
            right: 20px;
        }
    }
</style>