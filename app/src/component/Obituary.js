import React,{Component} from 'react';
import './../component_css/Erotic.css';
import Lists from './ssb'


class Erotic extends Component {
    constructor(props){
        super(props);
        this.state={
            title:['阳寿未尽','孤魂野鬼','转世投胎','已删除'],
            index:0,
            arr_title:["ID","姓名","寿命","类别","死亡方式","操作"],
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
                        <div className="czh_title">生死簿</div>
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