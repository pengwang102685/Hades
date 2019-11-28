import React,{Component} from 'react';
import './../component_css/Erotic.css';
<<<<<<< HEAD
import Top from './top'



class Erotic extends React.Component {
    constructor() {
        super()

    }
    render() {
        return(
            <div>勾魂</div>
=======
import Lists from './goulist'
import Axios from 'axios'

class Erotic extends Component {
    constructor(props){
        super(props);
        this.state={
            title:['未处理','勾魂中','孟婆验收','退单'],
            index:0,
            arr_title:["ID","姓名","勾魂使者","勾魂时间","退单理由","退单人","退单时间"],
            arr:[],
        }
    }
    componentWillMount(){
        Axios.get('http://localhost:8000/tui/tui').then((data) => {
            // console.log(data.data)
            this.setState({
                arr: data.data
            })
            // console.log(this.state.arr)
        })
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
                        <div className="czh_title">勾魂管理</div>
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
                        <Lists cent={this.state.arr}/>
                    </div>
                </div>
            </div>
>>>>>>> a36d4821907e15b70d16fd78d05e81b76fd70a9d
        )
    }
}
export default Erotic