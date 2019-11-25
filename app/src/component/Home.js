import React from 'react';
import './../component_css/Home.css';
import Zx from './zx.js'
import Bt from './bt.js'
import Axios from 'axios'



class Home extends React.Component {
    componentDidMount() {
        Axios.get('http://localhost:8000/shouye').then((data)=>{
            console.log(data)
        })
    }
    render() {
        return (
            <div className='zyx_home'>
                <div className='zyx_top'></div>
                <div className='zyx_bottom'>
                    <div className='zyx_bottom1'>
                        <div className='zyx_bottom_1'>
                            <div className='zyx_bottom_1_one'>
                                <p className='zyx_bottom1_p'>地府人数</p>
                                <p className='zyx_bottom1_p1'>1986</p>
                            </div>
                            <div className='zyx_bottom_1_two'>
                                <p className='zyx_bottom1_p'>今日入境</p>
                                <p className='zyx_bottom1_p1'>10</p>
                            </div>
                            <div className='zyx_bottom_1_three'>
                                <p className='zyx_bottom1_p'>今日出境</p>
                                <p className='zyx_bottom1_p1'>16</p>
                            </div>
                            <div className='zyx_bottom_1_four'>
                                <p className='zyx_bottom1_p'>管理员</p>
                                <p className='zyx_bottom1_p1'>100</p>
                            </div>
                        </div>
                        <div className='zyx_bottom_2'>
                            <div className='zyx_zx_div'><p className='zyx_zy_p'>常用导航功能</p><p className='zyx_zy_span'><span className='zyx_zy_span1'>···</span></p></div>
                            <div className='zyx_bottom_2_yuan'>
                                <div className='zyx_bottom_2_yuan1'></div>
                            </div>
                        </div>
                        <div className='zyx_bottom_3'>
                            <div className='zyx_zx_div'><p className='zyx_zy_p'>今日待办</p><p className='zyx_zy_span'><span className='zyx_zy_span1'>···</span></p></div>
                            <div className='zyx_bottom_3_time'>
                                <div className='zyx_bottom_3_top'>
                                    <span className='zyx_bottom_3_top_span'>AM  9:00</span>
                                    <span className='zyx_bottom_3_top_span1'>大事件审判</span>
                                </div>
                                <div className='zyx_bottom_3_center'>
                                    <span className='zyx_bottom_time_span1'>时间：2019年11月2日</span>
                                    <span className='zyx_bottom_time_span2'>地点：地狱十八层</span>
                                    <div className='zyx_bottom_time_img'>
                                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1591033009,497553808&fm=26&gp=0.jpg" />
                                        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=452037148,398661658&fm=26&gp=0.jpg" />
                                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3353231824,1868742502&fm=111&gp=0.jpg"></img>
                                    </div>
                                </div>
                                <div className='zyx_bottom_3_bottom'>
                                    PM  6:00  职工聚餐<br />
                                    PM  11:00  判官高级培训
                            </div>
                            </div>
                        </div>
                        <div className='zyx_zx'>
                            <div className='zyx_zx_div'><p className='zyx_zy_p'>地府出境人数</p><p className='zyx_zy_span'><span className='zyx_zy_span1'>···</span></p></div>
                            <div id='main' style={{ width: '100%', height: 250 }}><Zx></Zx></div>
                        </div>
                        <div className='zyx_bottom_4'>
                            <div className='zyx_zx_div'><p className='zyx_zy_p'>各层地狱人数</p><p className='zyx_zy_span'><span className='zyx_zy_span1'>···</span></p></div>
                            <div id='main'>
                                <Bt></Bt>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home