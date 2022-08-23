<template>
  <div ref="echart"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Echart',
    props:{
        isAxios:{
            type: Boolean,
            default:true
        },
        echartData:{
            type:Object,
            default(){
                return {
                    xData:[],
                    series:[]
                }
            }
        }
    },
    data(){
        return {
            xOptions:{
                title: {
                    text: 'Stacked Line'
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '12%',
                    containLabel: true
                },
                xAxis:{
                    type: 'category'
                },
                yAxis:{

                }
            },
            circleOptions:{
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
            },
            echart:null
        }
    },
    watch:{
        echartData:{
            handler(){
                this.initEcharts();
            },
            deep:true
        }
    },
    methods:{
        initEcharts(){
            this.initEchartData();
            if(this.echart){
                this.echart.setOption(this.options)
            }else{
                this.echart = echarts.init(this.$refs.echart);
                this.echart.setOption(this.options);
            }
        },
        initEchartData(){
            if(this.isAxios){
                this.xOptions.xAxis.data = this.echartData.xData;
                this.xOptions.series = this.echartData.series;
            }else{
                this.circleOptions.series = this.echartData.series;
            }
        }
    },
    computed:{
        options(){
            return this.isAxios?this.xOptions:this.circleOptions;
        }
    }
}
</script>

<style>

</style>