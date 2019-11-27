import React,{Component} from 'react';
class list1 extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {id,name,gh,time,liyou,tdr,times } = this.props
        return (
            <li className='list_info'>
                <span className='list_name'>{id}</span>
                <span className='list_name'>{name}</span>
                <span className='list_name'>{gh}</span>
                <span className='list_name'>{time}</span>
                <span className='list_name'>{liyou}</span>
                <span className='list_name'>{tdr}</span>
                <span className='list_name'>{times}</span>
            </li>
        );
    }
}

export default list1;