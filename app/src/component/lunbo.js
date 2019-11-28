import React,{Component} from 'react';
const Lunbo =[
    '贴膜地狱',
    '孤独地狱',
    '畜生地狱',
    '剥皮地狱',
    '飞逝地狱',
    '油锅地狱',
    '刀山地狱',
    '火海地狱',
    '铜烙地狱',
    '戈壁地狱',
    '掏心地狱'
]
class lunbo extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:Lunbo,
            index:0
        }
    }
    btn(){
        if(this.state.index>=this.state.arr.length){
            this.setState.index=0
        }else{
            this.setState.index++
        }
    }
    render(){
        var jsxl=this.state.arr.map((item,i)=>{
            return(
                <li className={this.state.index==i?'czh_lunbo_active':''} key={i}>
                    {item}
                    <div className="czh_lunbo_info">
                        <p>本层人数</p>
                        <div className="czh_lb_sum"><div></div></div>
                        <p>痛苦值</p>
                        <div className="czh_lb_tk"><div></div></div>
                        <p>物资补给</p>
                        <div className="czh_lb_wz"><div></div></div>
                    </div>
                </li>
            )
        })
        return(
            <div className="czh_biglb">
                <div className="czh_prive">上一层</div>
                <div className="czh_next" onClick={this.btn.bind()}>下一层</div>
                <div className="czh_fx">
                    <ul className="czh_smlb">
                        {jsxl}
                    </ul>
                </div>
            </div>
        )
    }
}

export default lunbo