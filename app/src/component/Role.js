
import React from 'react';
import './../component_css/Role.css';
import Top from './top.js'



function Role() {
    return (
        <div className = "role_box" >
		<Top/>
            <div className='box'>
                {/* 面包屑 */}
                <div className='crumbs'>

                </div>

                {/* 内容 */}
                <div className='role_cont'>
                   <div className='fx'>
                        {/* 左栏 */}
                    <div className='role_cont_left'>
                        <p>角色名称</p>
                        <p>权限</p>
                    </div>
                    {/* 右栏 */}
                    <div className='role_cont_right'>
                        <div className='role_cont_right_input'>
                            <input type="text"/>
                        </div>
                        <div className='role_cont_right_cont1'>
                            <p>生死簿</p>
                            <div>
                                <span>用户名称:</span>
                                <select>
                                    <option value ="bfdq">华东区1</option>
                                    <option value ="hdyq">华东区2</option>
                                    <option value ="wtdq">华东区3</option>
                                    <option value ="dxdq">华东区4</option>
                                    <option value ="gdyq">华东区5</option>
                                </select>
                                <div className='checked_input'>
                                    <input id="item1" type="checkbox" name="item" value="选项一" />
                                    <label for="item1"></label>
                                    <span>查看生死簿</span>
                                </div>
                                <div className='checked_input'>
                                    <input id="item2" type="checkbox" name="item" value="选项二" />
                                    <label for="item2"></label>
                                    <span>叫人三更死</span>
                                </div>
                                <div className='checked_input'>
                                    <input id="item3" type="checkbox" name="item" value="选项三" />
                                    <label for="item3"></label>
                                    <span>删除用户</span>
                                </div>
                            </div>
                        </div>

                        {/* 222222222222222 */}
                        <div className='role_cont_right_cont2'>
                            <p>阎王殿</p>
                            <div>
                                <div className='checked_input'>
                                    <input id="itemq" type="checkbox" name="item" value="选项一" />
                                    <label for="itemq"></label>
                                    <span>审核记录</span>
                                </div>
                                <div className='checked_input'>
                                    <input id="itemw" type="checkbox" name="item" value="选项二" />
                                    <label for="itemw"></label>
                                    <span>编辑</span>
                                </div>
                                <div className='checked_input'>
                                    <input id="iteme" type="checkbox" name="item" value="选项三" />
                                    <label for="iteme"></label>
                                    <span>审批</span>
                                </div>
                                <div className='checked_input'>
                                    <input id="itemr" type="checkbox" name="item" value="选项三" />
                                    <label for="itemr"></label>
                                    <span>删除</span>
                                </div>
                            </div>
                        </div>

                        {/* 3333333333333333333 */}
                        <div className='role_cont_right_cont3'>
                            <p>十八地狱</p>
                            <div>
                                <div className='checked_input'>
                                    <input id="itema" type="checkbox" name="item" value="选项一" />
                                    <label for="itema"></label>
                                    <span>设备管理</span>
                                </div>
                                <div className='checked_input'>
                                    <input id="items" type="checkbox" name="item" value="选项二" />
                                    <label for="items"></label>
                                    <span>刑罚作业</span>
                                </div>
                                <div className='checked_input'>
                                    <input id="itemd" type="checkbox" name="item" value="选项三" />
                                    <label for="itemd"></label>
                                    <span>查看用户</span>
                                </div>
                            </div>
                        </div>
                        {/* 4444444444444444444 */}
                        <div className='role_cont_right_cont4'>
                            <p>系统管理</p>
                            <div>
                                <div className='checked_input'>
                                    <input id="itemz" type="checkbox" name="item" value="选项一" />
                                    <label for="itemz"></label>
                                    <span>创建管理员</span>
                                </div>
                                <div className='checked_input'>
                                    <input id="itemx" type="checkbox" name="item" value="选项二" />
                                    <label for="itemx"></label>
                                    <span>编辑管理员</span>
                                </div>
                                <div className='checked_input'>
                                    <input id="itemc" type="checkbox" name="item" value="选项三" />
                                    <label for="itemc"></label>
                                    <span>新建角色</span>
                                </div>
                                <div className='checked_input'>
                                    <input id="itemv" type="checkbox" name="item" value="选项三" />
                                    <label for="itemv"></label>
                                    <span>编辑角色权限</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                   </div>
                    <div className='footer'>
                            <button>确定</button>
                            <button>取消</button>
                        </div>
                </div>
            </div> 
        </div>
    )
}
export default Role