import Mock from 'mockjs'

let List = []

export default {
    getStaticData:()=>{
        for(let i=0;i<7;i++){
            List.push(
                 Mock.mock({
                    苹果:Mock.Random.float(100,8000,0,0),
                    三星:Mock.Random.float(100,8000,0,0),
                    小米:Mock.Random.float(100,8000,0,0),
                    华为:Mock.Random.float(100,8000,0,0),
                    魅族:Mock.Random.float(100,8000,0,0),
                    vivo:Mock.Random.float(100,8000,0,0)
                })
            )
        }
        return {
            code:20000,
            data:{
                tableData:[
                    {
                      name:'三星',
                      todayNum: 123,
                      monthNum: 1230,
                      totalNum: 15301
                    }, 
                    {
                      name:'三星',
                      todayNum: 123,
                      monthNum: 1230,
                      totalNum: 15301
                    },
                    {
                      name:'三星',
                      todayNum: 123,
                      monthNum: 1230,
                      totalNum: 15301
                    },
                    {
                      name:'三星',
                      todayNum: 123,
                      monthNum: 1230,
                      totalNum: 15301
                    },
                    {
                      name:'三星',
                      todayNum: 123,
                      monthNum: 1230,
                      totalNum: 15301
                    },
                
                ],
                //折线图
                lineEchart:{
                  xData:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  series: [
                    {
                      name: 'Email',
                      type: 'line',
                      stack: 'Total',
                      data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                      name: 'Union Ads',
                      type: 'line',
                      stack: 'Total',
                      data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                      name: 'Video Ads',
                      type: 'line',
                      stack: 'Total',
                      data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                      name: 'Direct',
                      type: 'line',
                      stack: 'Total',
                      data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                      name: 'Search Engine',
                      type: 'line',
                      stack: 'Total',
                      data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                  ]
                },
                //柱状图
                barEchart:{
                  xData:['2012', '2013', '2014', '2015', '2016'],
                  series: [
                    {
                      name: '新增',
                      type: 'bar',
                      barGap: 0,
                      emphasis: {
                        focus: 'series'
                      },
                      data: [320, 332, 301, 334, 390]
                    },
                    {
                      name: '总数',
                      type: 'bar',
                      emphasis: {
                        focus: 'series'
                      },
                      data: [220, 182, 191, 234, 290]
                    }
                  ]
                },
                //饼图
                circleEchart:{
                  series: [
                    {
                      name: 'Access From',
                      type: 'pie',
                      radius: '50%',
                      data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                      ],
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    }
                  ]
                }
            }
        }
    }
}