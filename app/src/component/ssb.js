import React,{Component} from 'react';
import List from './lb3'
import PageButton from './button'

const listData = [{
    id:'魂字1350号',
    name:'孙悟空',
    sui:'342岁',
    lie:'天产石猴',
    fs:'善终',
    zhixing:'撤销 编辑 彻底删除',
},
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