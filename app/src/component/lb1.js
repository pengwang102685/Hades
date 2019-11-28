import React,{Component} from 'react';
class list1 extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {id,name,shizhe,gtime,reason,tpeople,ttime } = this.props
        return (
            <li className='list_info'>
                <span className='list_name'>{id}</span>
                <span className='list_name'>{name}</span>
                <span className='list_name'>{shizhe}</span>
                <span className='list_name'>{gtime}</span>
                <span className='list_name'>{reason}</span>
                <span className='list_name'>{tpeople}</span>
                <span className='list_name'>{ttime}</span>
            </li>
        );
    }
}

export default list1;