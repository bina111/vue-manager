<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg">
          <div class="userInfo">
            <p class="name">用户</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2021-10-15</span></p>
          <p>上次登录地点：<span>广东</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px; height: 360px; overflow-y: auto;">
        <el-table :data="tableData">
          <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{display: 'flex', padding: 0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
          <div class="detail">
            <p class="number">￥{{item.value}}</p>
            <p class="name">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height:280px">
        <!-- <div style="height:280px" ref="echarts"></div> -->
        <echart :echartData="echartData.order" style="height:280px" />
      </el-card>
      <div class="graph">
        <el-card  style="height:160px; width: 50%;">
          <!-- <div style="height:160px" ref="userEcharts"></div> -->
          <echart :echartData="echartData.user" style="height:160px" />
        </el-card>
        <el-card style="height:160px; width: 50%;">
          <!-- <div style="height:160px" ref="circleEcharts"></div> -->
          <echart :echartData="echartData.circle" :isAxios="false" style="height:160px" />
        </el-card>

      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from '../../../api/data'
// import * as echarts from 'echarts';
import Echart from '@/components/Echart.vue'



export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Home',
    data() {
        return {
            userImg:require("../../assets/images/user.png"),
            tableData:[],
            tableLabel:{
              name:'品牌',
              todayNum: '今日销量',
              monthNum: '月销量',
              totalNum: '总销量'
            },
            countData:[
              {
                name: '今日订单',
                value: 123,
                icon: 'coffee',
                color:'#2ec7c9'
              },
              {
                name: '今日订单2',
                value: 123,
                icon: 'coffee',
                color:'#2ec7c9'
              },
              {
                name: '今日订单3',
                value: 123,
                icon: 'coffee',
                color:'#2ec7c9'
              },
              {
                name: '今日订单4',
                value: 123,
                icon: 'coffee',
                color:'#2ec7c9'
              },
              {
                name: '今日订单5',
                value: 123,
                icon: 'coffee',
                color:'#2ec7c9'
              },
              {
                name: '今日订单7',
                value: 123,
                icon: 'coffee',
                color:'#2ec7c9'
              }
            ],
            echartData:{
              order:{
                xData:[],
                series:[],
              },
              user:{
                xData:[],
                series:[],
              },
              circle:{
                series:[],
              }
            }
        }
    },
    components:{
      Echart
    },
    mounted(){
      getData().then(res=>{
          const {code, data} = res.data;
          if(code === 20000){
            this.tableData = data.tableData;
            this.echartData.order.xData = data.lineEchart.xData;
            this.echartData.order.series = data.lineEchart.series;

            this.echartData.user.xData = data.barEchart.xData;
            this.echartData.user.series = data.barEchart.series;
        
            this.echartData.circle.series = data.circleEchart.series;
          }

      }).catch(error=>{
        console.log(error)
      })
    }
}
</script>

<style lang="less" scoped>
  .home{
    height: 100%;
  }
  .user{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #8a8a8a;
    padding-bottom: 10px;
    .name{
      color: #333;
      font-size: larger;
    }
    .access{
      color: #8a8a8a;
      font-size: smaller;
    }
    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  .login-info{
    color: #8a8a8a;
    font-size: smaller;
  }
  .num{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .el-card{
      margin-right: 10px;
      margin-bottom: 10px;
      width: 250px;
      padding: 0;
      .icon{
        flex: 1;
        text-align: center;
      }
      .detail{
        flex:3;
        margin: 0;
        padding: 0;
      }
    }

  }
  .graph{
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    .el-card{
      margin-right: 10px;
    };
    .el-card:last-child{
      margin-right: 0;
    }
  }

</style>