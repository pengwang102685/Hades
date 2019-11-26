import React,{Component} from 'react';
import './../component_css/Rizhi.css';
import Lists from './fen'



class Rizhi extends Component {
    constructor(props){
        super(props);
        this.state={
            title:['操作日志','同步日志','登录日志'],
            index:0,
            arr_title:["管理员","操作","备注","日期","操作"],
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
                        <div className="czh_title">日志管理</div>
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
export default Rizhi