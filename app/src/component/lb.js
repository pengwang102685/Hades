import React,{Component} from 'react';
class list extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name,cz,beizu,riqi,zhixing } = this.props
        return (
            <li className='list_info'>
                <span className='list_name'>{name}</span>
                <span className='list_name'>{cz}</span>
                <span className='list_name'>{beizu}</span>
                <span className='list_name'>{riqi}</span>
                <span className='list_name'>{zhixing}</span>
            </li>
        );
    }
}

export default list;