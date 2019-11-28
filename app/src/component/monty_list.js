import React,{Component} from 'react';
import List from './lb2'
import PageButton from './button'

const listData = [{
    name:'***',
    money:'3万亿',
    beizu:'忌日快乐',
    name1:'***',
    dd:'未知',
    time:'第一年'
},
{
    name:'***',
    money:'3万亿',
    beizu:'忌日快乐2',
    name1:'***',
    dd:'未知',
    time:'第二年'
}
]

class listBox extends Component {

    constructor(props){
        super(props);
        this.pageNext=this.pageNext.bind(this);
        this.setPage=this.setPage.bind(this);
        this.state = {
            indexList:[],//当前渲染的页面数据
            totalData:listData,
            current: 1, //当前页码
            pageSize:5, //每页显示的条数
            goValue:0,  //要去的条数index
            totalPage:0,//总页数
        };
    }
    componentWillMount(){
        //设置总页数
        this.setState({
            totalPage:Math.ceil( this.state.totalData.length/this.state.pageSize),
        })
        this.pageNext(this.state.goValue)
    }
    //设置内容
    setPage(num){
        this.setState({
            indexList:this.state.totalData.slice(num,num+this.state.pageSize)
        })
    }
    pageNext (num) {
        this.setPage(num)
    }
    render() {
        const {index} = this.props
        return (
            <div className="main">
                <div>{this.props.index}</div>
                <div className="lists">
                    <ul className="index">
                    {this.state.indexList.map(function (cont,n) {
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