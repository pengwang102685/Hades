import React from 'react'
import * as Echarts from 'echarts';
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'


// console.log(Echarts)
class Immortals extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="main" style={{ width: 600, height: 400, }}></div>
        )
    }
    componentDidMount() {
        var myChart = Echarts.init(document.getElementById('main'));
        var option = {
            xAxis: {
                type: 'category',
                data: ['2', '3', '4', '5', '6', '7', '8', '9', '10'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ccc',
                        fontSize: 16      //更改坐标轴文字大小
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#ccc'],
                        width: 1,
                        type: 'solid'
                    }
                }

            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 100,
                splitNumber: 7,
                splitLine: {
                    lineStyle: {
                        color: ['#ccc'],
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            series: [
                {
                    data: [20, 50, 40, 70, 80, 30, 10, 70, 40],
                    type: 'line',
                    smooth: true,
                    color: 'skyblue',
                    symbol: 'none',
                    lineStyle: {
                        width: 1
                    }
                },
                {
                    data: [10, 80, 40, 20, 70, 30, 70, 20, 40],
                    type: 'line',
                    smooth: true,
                    color: 'red',
                    symbol: 'none',
                    lineStyle: {
                        width: 1
                    }
                }
            ]
        };

        myChart.setOption(option);
        // console.log(myChart.setOption(option))
    }
}

export default Immortals;