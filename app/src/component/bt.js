import React from 'react'
// import echarts from 'echarts'
// import Echarts from 'echarts'
import * as Echarts from 'echarts';
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

console.log(Echarts)
class Immortals extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="bt" style={{ width: '100%', height: 250, }}></div>
        )
    }
    componentDidMount() {
        var myChart = Echarts.init(document.getElementById('bt'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                y: 'bottom',
                data: ['1', '2', '3', '4']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['30%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '1' },
                        { value: 310, name: '2' },
                        { value: 234, name: '3' },
                        { value: 135, name: '4' },
                    ]
                }
            ]
        };

        myChart.setOption(option);
        console.log(myChart.setOption(option))
    }
}

export default Immortals;