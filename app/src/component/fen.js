import React,{Component} from 'react';
import List from './lb'
import PageButton from './button'

const listData = [{
    name:'秦广网',
    cz:'删除生死簿用户',
    beizu:'了账了账鸡蛋不服你关了',
    riqi:'东汉末年某月',
    zhixing:'撤销',
},
{
    name:'秦广网',
    cz:'操作',
    beizu:'了账了账鸡蛋不服你关了',
    riqi:'东汉末年某月',
    zhixing:'撤销',
},
{
    name:'秦广网',
    cz:'操作',
    beizu:'了账了账鸡蛋不服你关了',
    riqi:'东汉末年某月',
    zhixing:'撤销',
},
{
    name:'秦广网',
    cz:'操作',
    beizu:'了账了账鸡蛋不服你关了',
    riqi:'东汉末年某月',
    zhixing:'撤销',
},
{
    name:'秦广网',
    cz:'操作',
    beizu:'了账了账鸡蛋不服你关了',
    riqi:'东汉末年某月',
    zhixing:'撤销',
},
{
    name:'秦广网',
    cz:'操作',
    beizu:'了账了账鸡蛋不服你关了',
    riqi:'东汉末年某月',
    zhixing:'撤销',
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
            pageSize:10, //每页显示的条数
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
        
        return (
            <div className="main">
                
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