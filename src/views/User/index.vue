<template>
  <div class="manage">
    <el-dialog
    :title="operateType === 'add' ?'新增用户':'更新用户'"
    :visible.sync="isShow"
    >
      <common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form">
      </common-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser" style="height: 40px;">+ 新增</el-button>
      <common-form
        :formLabel="formLabel"
        :form="searchForm"
        :inline="true"
        ref="selectForm">
        <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
      </common-form>
    </div>
    <common-table style="height:500px"
    :tableData="tableData"
    :tableLabel="tableLabel"
    :config="config"
    @edit="editUser"
    @delete="deleteUser"
    @changePage="changePage"></common-table>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm.vue'
import CommonTable from '@/components/CommonTable.vue'
import {getUser} from '../../../api/data'
export default {
    name:'User',
    data() {
        return {
            operateType:'add',
            isShow:false,
            operateFormLabel:[
              {
                model:'name',
                label:'姓名',
                type:'input'
              },
              {
                model:'age',
                label:'年龄',
                type:'input'
              },
              {
                model:'sex',
                label:'性别',
                type:'select',
                opts:[
                  {
                    label:'男',
                    value:1
                  },
                  {
                    label:'女',
                    value:0
                  }
                ]
              },
              {
                model:'birth',
                label:'出生日期',
                type:'date'
              },
              {
                model:'addr',
                label:'地址',
                type:'input'
              },
            ],
            operateForm:{
              name:'',
              age:'',
              sex:'',
              birth:'',
              addr:''
            },
            formLabel:[
              {
                model:'keyword',
                label:'',
                type:'input'
              }
            ],
            searchForm:{
              keyword:''
            },
            tableData:[],
            tableLabel:[
              {
                label:'姓名',
                model: 'name'
              },
              {
                label:'年龄',
                model: 'age'
              },
              {
                label:'性别',
                model: 'sex'
              },
              {
                label:'出生年月',
                model: 'birth',
                width:200
              },
              {
                label:'地址',
                model: 'addr',
                width:320
              }
            ],
            config:{
              page:1,
              total:30
            }
        }
    },
    components:{CommonForm,CommonTable},
    methods:{
      confirm(){
        if(this.operateType === 'edit'){
          this.$http.post('/user/edit',this.operateForm).then(res=>{
            this.isShow = false

            this.getList();
            console.log(res)
            this.$message({
              type:'success',
              message:res.data.data.message
            });
          })
        }else{
          this.$http.post('/user/add',this.operateForm).then(res=>{
            this.isShow = false;
            this.getList()
             console.log(res)
            this.$message({
              type:'success',
              message:res.data.data.message
            });
          })
        }
      },
      addUser(){
        this.isShow = true;
        this.operateType = 'add';
        this.operateForm = {
          name:'',
          age:'',
          sex:'',
          birth:'',
          addr:''
        }
      },
      changePage(page){
        this.config.page = page;
        this.getList();
      },
      getList(name=''){
          this.config.loading = true;
          name? (this.config.page = 1): '';
          getUser({
            page:this.config.page,
            name
          }).then(({data:res})=>{
            this.tableData =  res.userList.map(item=>{
              item.sex = item.sex == 0 ? '女' : '男';
              return item;
            });
            this.config.total = res.count;
            this.config.loading = false;
          })
      },
      editUser(row){
        this.operateType = 'edit';
        this.operateForm = row;
        this.isShow = true;
      },
      deleteUser(row){
        this.$confirm('此操作将永久删除，是否继续？','提示',{
          confirmButtonText:'确任',
          cancelButtonText:'取消',
          type:'warning'
        }).then(()=>{
          const id = row.id;
          this.$http.get('/user/del',{
            params:{
              id
            }
          }).then(()=>{
            this.getList()
            this.$message({
              type:'success',
              message:'删除成功'
            });
            
          })
        })
      }
    },
    created(){
      this.getList();
    }
}
</script>

<style>
  .manage-header{
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
</style>