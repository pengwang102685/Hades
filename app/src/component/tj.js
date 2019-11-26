import React from 'react'
// import echarts from 'echarts'
// import Echarts from 'echarts'
import * as Echarts from 'echarts';
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

// console.log(Echarts)
class Tj extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="tj" style={{ width: '100%', height: 240, }}></div>
        )
    }
    componentDidMount() {
        var myChart = Echarts.init(document.getElementById('tj'));
        var option = {
            color: ['#00ffcc','red'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '人数',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 50,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [
                {
                    name:'男人',
                    type:'bar',
                    data:[22.0, 42.9, 57.0, 133.2, 45.6, 156.7, 35.6, 62.2, 82.6, 70.0, 64, 33]
                },
                {
                    name:'女人',
                    type:'bar',
                    data:[12.6, 25.9, 39.0, 26.4, 38.7, 60.7, 125.6, 152.2, 98.7, 68.8, 46.0, 22.3]
                },
                {
                    name:'平均人数',
                    type:'line',
                    yAxisIndex: 1,
                    data:[42.0, 39.2, 43.3, 40.5, 36.3, 43.2, 32.3, 45.4, 37.0, 40.5, 31.0, 46.2]
                }
            ]
        };

        myChart.setOption(option);
        // console.log(myChart.setOption(option))
    }
}

export default Tj;