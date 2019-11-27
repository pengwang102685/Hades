import React,{Component} from 'react';
import './../component_css/Erotic.css';
import Lists from './monty_list'


class Erotic extends Component {
    constructor(props){
        super(props);
        this.state={
            title:['烧纸记录','设置汇率','用户资产'],
            index:0,
            arr_title:["收款人","收款金额","备注","汇款人","汇款地点","汇款日期",],
        }
    }
    btn(i){
        this.setState({index:i})
    }
    render(){
        var jsxinfo = this.state.title.map((item,i)=>{
            return(
            <span key={i}className={this.state.index==i?'czh_active':''} onClick={this.btn.bind(this,i)}>{item}</span>
            )
        })
        var jsxa = this.state.arr_title.map((arr_title,i)=>{
            return(
                <div className='list_name list_name_t' key={i}>
                   {arr_title}
                </div>
            )
        })
        return(
            <div className='zyx_home'>
                <div className="czh_top"></div>
                <div className="czh_bottom">
                    <div className="czh_bcontent">
                        <div className="czh_title">冥币管理</div>
                        <div className="czh_rizi"> 
                            {jsxinfo}
                        </div>
                        <div className="czh_sou">
                            <input type="text" placeholder="输入要搜索的内容"/>
                            <span></span>
                        </div>
                        <div className="list_info">
                            {jsxa}
                        </div>
                        <Lists/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Erotic