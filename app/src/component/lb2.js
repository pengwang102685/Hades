import React,{Component} from 'react';
class list extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name,money,beizu,name1,dd,time } = this.props
        return (
            <li className='list_info'>
                <span className='list_name'>{name}</span>
                <span className='list_name'>{money}</span>
                <span className='list_name'>{beizu}</span>
                <span className='list_name'>{name1}</span>
                <span className='list_name'>{dd}</span>
                <span className='list_name'>{time}</span>
            </li>
        );
    }
}

export default list;