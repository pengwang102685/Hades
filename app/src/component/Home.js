import React from 'react';
import './../component_css/Home.css';
import Zx from './zx.js'
import Bt from './bt.js'
import Axios from 'axios'
import Title from './Hometitile.js'
import Top from './top.js'



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sytitle: '',
            title: [
                '地府人数',
                '今日出境',
                '今日入境',
                '管理员'
            ],
			imgurl:'',
            function_arr: [
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u185.png?token=bdf35fd71a455f3c5c32dc8b35f5616373f6acdf777c00f40fc3033ce6b08488',
                    text: "生死簿"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u198.png?token=b6f96e0b0d69a96303bafd492fce7b503e8157d19e8d98b3aca7e72eb4a6858b',
                    text: "查询寿命"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u199.png?token=a285e7d5eeb400371222ffca3d6539c0bf5ba4dd7f536f6341339f041698235c',
                    text: "入境管理"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u200.png?token=7d45e328db36331248d53d02dfbdc80e64ee925d86b6f49510d286092a68fc17',
                    text: "重新投胎"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u201.png?token=e16733b5d825544ffb38ffd779edd3e30e396359435c8e3ccf49c74b2bc94465',
                    text: "货币管理"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u185.png?token=bdf35fd71a455f3c5c32dc8b35f5616373f6acdf777c00f40fc3033ce6b08488',
                    text: "操作日志"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u198.png?token=b6f96e0b0d69a96303bafd492fce7b503e8157d19e8d98b3aca7e72eb4a6858b',
                    text: "十八地狱"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u199.png?token=a285e7d5eeb400371222ffca3d6539c0bf5ba4dd7f536f6341339f041698235c',
                    text: "发勾魂单"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u200.png?token=7d45e328db36331248d53d02dfbdc80e64ee925d86b6f49510d286092a68fc17',
                    text: "资产管理"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u201.png?token=e16733b5d825544ffb38ffd779edd3e30e396359435c8e3ccf49c74b2bc94465',
                    text: "员工管理"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u185.png?token=bdf35fd71a455f3c5c32dc8b35f5616373f6acdf777c00f40fc3033ce6b08488',
                    text: "营销管理"
                },
                {
                    url: 'http://cloud.axureshop.com/gsc/1IZGNL/52/e4/77/52e4779c0d8d4a0c9ac6c2283464471d/images/首页/u200.png?token=7d45e328db36331248d53d02dfbdc80e64ee925d86b6f49510d286092a68fc17',
                    text: "百鬼夜行"
                },
            ]
        }
    }
    componentWillMount() {
        Axios.get('http://localhost:8000/shouye').then((data) => {
            // console.log(data.data)
            this.setState({
                sytitle: data.data,
				imgurl:JSON.parse(sessionStorage.login).data[0].imgurl
            })
        })
		
		
    }
	back() {
						window.location.href = 'http://localhost:3000';
						window.sessionStorage.login = '';
					}

    render() {
        // console.log(this.state.sytitle[0])
        return (
            <div className='zyx_home'>
				<Top></Top>
                <div className='zyx_bottom'>
                    <div className='zyx_bottom1'>
                        <div className='zyx_bottom_1'>
                            <Title comment={this.state.sytitle} title={this.state.title}></Title>
                        </div>
                        <div className='zyx_bottom_2'>
                            <div className='zyx_zx_div'><p className='zyx_zy_p'>常用导航功能</p><p className='zyx_zy_span'><span className='zyx_zy_span1'>···</span></p></div>
                            <div className='zyx_bottom_2_yuan'>

                                {this.state.function_arr.map((item, index) => {
                                    return (
                                        <div className="function-icon" key={index}>
                                            <div className="zyx_bottom_2_yuan1">
                                                <img src={item.url} alt="" className="item-img" />
                                            </div>
                                            <p>{item.text}</p >
                                        </div>
                                    )
                                })}
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
                                    <p>PM  6:00  职工聚餐</p>
                                    <p className='p_3'>PM  11:00  判官高级培训</p>
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