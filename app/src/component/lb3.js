import React,{Component} from 'react';
class list extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id,name,sui,lie,fs,zhixing } = this.props
        return (
            <li className='list_info'>
                <span className='list_name'>{id}</span>
                <span className='list_name'>{name}</span>
                <span className='list_name'>{sui}</span>
                <span className='list_name'>{lie}</span>
                <span className='list_name'>{fs}</span>
                <span className='list_name'>{zhixing}</span>
            </li>
        );
    }
}

export default list;