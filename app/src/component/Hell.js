import React from 'react';
import './../component_css/Hell.css';
import Top from './top'


class Hell extends React.Component {
    constructor() {
        super()

    }
    render() {
        var arr = [1, 2, 3, 4, 5, 6,7]
        var c = arr.map((item, index) => {
            return (
                <div className='zsitem' key={index}>
                    <div className='zsitemtop'>
                        <div>刀山0001</div>
                        <div>设备正常</div>
                    </div>
                    <div className='zsitemtop1'>
                        <div>操作员：小鬼鬼</div>
                        <div>已工作35年</div>
                    </div>
                    <div className='zsitemcon'>

                    </div>
                    <div className='zsitembot'>
                        设备暂停  查看记录
                                </div>
                </div>
            )
        })
        return (
            <div>
                <Top></Top>
                <div className='zscon'>
                    <div className='zstai'>
                        <div className='zstop'>设备管理</div>
                        <div className='zsitemz'>
                            {c}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hell