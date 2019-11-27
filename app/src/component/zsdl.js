import React,{ Component } from 'react';
import './../component_css/zsdl.css';
import axios from 'axios'



// function Zsdl() {
//     return (
//         <div className='zyx_home'>zsdl</div>
//     )
// }

class Zsdl extends Component{
    constructor(props) {
        super(props);
        this.state={
            tits:['账号登录','手机登录','扫码登录'],
            curr:0 ,
			user: "",
			pass: ""
        }
    }
	userChange(e) {
	  this.setState({
	    user: e.target.value
	  });
	}
	passwordChange(e) {
	  this.setState({
	    pass: e.target.value
	  });
	}
	loginIn() {
		console.log(333)
	  var data = {
	    user: this.state.user,
	    pass: this.state.pass
	  };
	  axios.post("http://localhost:8000/login/in", data).then(data => {
	    if (data.data.ok == 0) {
	      // alert('登录成功');
	      window.location.href = "/z";
	      window.sessionStorage.login = JSON.stringify(data.data);
	    } else if (data.data.ok == 1) {
	      alert("账号或密码错误");
	    } else if (data.data.ok == 2) {
	      alert("参数缺失");
	    }
	  });
	}
    dj(n){
        this.setState({curr:n})
    }
    render() {
        var jsxTabs=this.state.tits.map((v,i)=>{
            return ( <li key={ i } 
            onClick={this.dj.bind(this,i)}
            className={this.state.curr==i?"active":""}
            >
                <span >{v}</span>
            </li>
            )
        })
        return (
            <div className="bace">
                <div className="yjr_fx" id="olbct">
                    <div className="yjr_dwd">
                        <div className="yjr_anm">
                            <img className="yjr_hy" src="img/2.png"></img>
                        </div>
                        <div className="yjr_dyu">
                            <div className="yjr_baioa">
                                <p><span>地狱管理系统</span></p>
                            </div>
                        </div>
                        <div className="yjr_didsah" id="olbctc">
                            <img src="img/1.png"></img>
                        </div>

                        <div className="a2">
                            <ul>
                            {jsxTabs}
                            </ul>
                        </div>

                        {/* 这里是账号的框 */}
                        <div id="yjr_kuang" className={this.state.curr==0?'':'ac'}>
                            <div className="yjr_vist">
                                {/* 账号 */}
                                <div className='yjr_vito'>
                                    <div className="yjr_dsad">
                                        <div className="yjr_jla">
                                            <input type="text"  className='yjr_dasdcc'placeholder="账号/手机号/邮箱" onChange={this.userChange.bind(this)}
              defaultValue={this.state.user}
											/>
                                        </div>
                                    </div>
                                </div>
                                {/* 密码 */}
                                <div className="yjr_cjka">
                                    <div className="yjr_adabb">
                                        <div className="yjr_bbain">
                                            <input type="password"  className='yjr_chalaheui'placeholder="密码" 
											onChange={this.passwordChange.bind(this)}
											defaultValue={this.state.pass}/>
                                        </div>
                                    </div>
                                </div>
                                {/* 如果密码或者账号错误的话让这个 visibility: hidden;这个hidden变成 visible 就显示了*/}
                                <div className="yjr_ciqiong">
                                    <div></div>
                                    <div className="yjr_xihaguai">
                                        <p> <span> 账号密码错误</span> </p>
                                    </div>
                                </div>
                                {/* 这里是登录按钮点击登录请求 */}
                                <div className="yjr_dluya" onClick={this.loginIn.bind(this)}>
                                    <div className="yjr_sishen"></div>
                                    <div className="yjr_npsp">
                                        <p><span >登录</span></p>
                                    </div>
                                </div>
                                {/* 这个功能暂时不知道  目前来看应该就是密码忘记了以通过自己的账号ID 重新修改密码*/}
                                <div className="yjr_jnvv">
                                    <div className="yjr_storrt"> </div>
                                    <div className="yjr_pusert">
                                        <p><span>忘记密码</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* 这是一个断点 */}
                        <div id="yjr_kuanb" className={this.state.curr==1?'':'ac'}>
                            <div className="yjr_vist">
                                {/* 手机号 */}
                                <div className='yjr_vito'>
                                    <div className="yjr_dsad">
                                        <div className="yjr_jla">
                                            <input type="text" className='yjr_dasdcc'placeholder="手机号"max="5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="yjr_cjka">
                                    <div className="yjr_adabb">
                                        <div className="yjr_bbain">
                                            <input type="text" className='yjr_chalaheui'   placeholder="验证码" />
                                        </div>
                                    </div>
                                </div>
                                <div className="yjr_dluya">
                                    <div className="yjr_sishen"></div>
                                    <div className="yjr_npsp">
                                        <p><span >登录</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="yjr_kuanl" className={this.state.curr==2?'':'ac'}>
                            <div className="yjr_vist">
                                <div className="yjr_sq">
                                    <img  src="./img/3.jpg"></img>
                                </div>
                                <div className="yjr_slpak">
                                    <div className="yjr_hasheds">
                                        <p><span>请使用手机App扫码登录</span></p>
                                    </div>
                                </div>
                                <div className="yjr_plmjh">
                                    <p><span>下载App</span></p>
                                </div>
                            </div>
                        </div>

                    </div>   
                </div>
            </div>
        )

    }
}



export default Zsdl