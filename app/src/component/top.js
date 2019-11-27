import React from 'react';
import './../component_css/Home.css';

class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
			imgurl:'',
        }
    }
    componentWillMount() {
       this.setState({
       	imgurl:JSON.parse(sessionStorage.login).data[0].imgurl
       })
    }
	back() {
						window.location.href = 'http://localhost:3000';
						window.sessionStorage.login = '';
					}
    render() {
        return (
            <div>
                <div className='zyx_top'>
                    <div className='zyx_top_tui'>
                        <p onClick={this.back.bind(this)}>退出</p>
                    </div>
                    <div className='zyx_top_zh'>
                        <p>1号管理员</p>
                        <div className='zyx_top_img'>
                            <img src={this.state.imgurl} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Top
