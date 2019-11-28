import React,{Component} from 'react';
import List from './lb1'
import PageButton from './button'


class listBox extends Component {
    constructor(props){
        super(props);
        this.pageNext=this.pageNext.bind(this);
        this.setPage=this.setPage.bind(this);
        this.state = {
            indexList:[],//当前渲染的页面数据
            totalData:this.props.cent,
            current: 1, //当前页码
            pageSize:5, //每页显示的条数
            goValue:0,  //要去的条数index
            totalPage:0,//总页数
            num: 0,
        };
    }
    componentWillMount(){
        this.setState({
            totalData:this.props.cent
        })
        //设置总页数
        this.setState({
            totalPage:Math.ceil( this.props.cent.length/this.state.pageSize),
        })
        
        this.pageNext(this.state.goValue)
    }
    componentDidMount(){
        console.log(this.props)
    }
    //设置内容
    setPage(num){
        this.setState({
            indexList:this.props.cent.slice(num,num+this.state.pageSize)
        })
    }
    pageNext (num) {
        this.setPage(num)
    }
    render() {
        return (
            <div className="main">
                <div>{this.props.index}</div>
                <div className="lists">
                    <ul className="index">
                    {this.props.cent.map(function (cont,n) {
                            return <List key={n} {...cont} />
                        })}
                    </ul>
                    <div className="czh_cli">
                        <div className="czh_xuan"></div>
                        <PageButton { ...this.state } pageNext={this.pageNext} />
                    </div>
                </div>
            </div>
        );
    }
}
export default listBox;