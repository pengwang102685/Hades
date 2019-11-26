import React from 'react';
import './../component_css/Bigdata.css';



function Bigdata() {
    return (
        <div className="App">
      <div className='bcg'>
        <div className='top'>
          <div>💀 地府大数据 </div>
          <div style={{textAlign:'right',flex:'1',fontSize:'13px'}}>2019/11/25 上午9:39:25  <span>☁ 丰都多云-6 ℃</span></div>
        </div>
        <div className='content'>
          <div>
              <div className='color num'>
                <div className='num_content'>
                  <p>地府人数</p>
                  <h3>19,861,016</h3>
                  <div className='num1'></div>
                  <div className='num2'></div>
                  <div className='num3'></div>
                  <div className='num4'></div>
                </div>
               
              </div>
              {/* 轮播图 */}
              <ul>
                <li></li>
              </ul>
              <div className='bum'>
                <div className='sex'>
                  <h5>地狱受刑人员性别</h5>
                  <div className='man'>
                    <div className='male'>
                        <p className='color'>6542</p>
                        <span>男人</span>
                    </div>
                    <div className='female'>
                        <p className='color2'>6542</p>
                        <span>女人</span>
                    </div>
                  </div>
                  <div className='bum1'></div>
                  <div className='bum2'></div>
                  <div className='bum3'></div>
                  <div className='bum4'></div>
                </div>
              </div>
            </div>
          <div>
              <div className='stat'>
                <h4>统计</h4>
                <p className='value color'><span style={{fontSize:'20px'}}>6542</span><span>+13%</span></p>
                <p className='date'><span>总计</span><span>今年</span></p>
                <p className='value color'><span>126</span><span className='color3'>+6%</span></p>
                <p className='date'><span>分类</span><span>去年</span></p>
                <p className='value color'><span>667</span><span>+23%</span></p>
                <p className='date'><span>总计</span><span>今年</span></p>
                <p className='title'><span></span>地府工作人员业绩统计</p>
              </div>
              <div className='stat'>
                
                <p className='title'><span></span>冥币汇率变化</p>
              </div>
              <div className='stat'>
               
                <p className='title'><span></span>地府运营指标统计</p>
              </div>
              
          </div>
        </div>
      </div>
    </div>
    )
}
export default Bigdata