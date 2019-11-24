import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './component/Home.js'
import Obituary from './component/Obituary.js'
import Erotic from './component/Erotic.js'
import Judge from './component/Judge.js'
import Hell from './component/Hell.js'
import Samsara from './component/Samsara.js';
import Hellmoney from './component/Hellmoney.js'
import Rizhi from './component/Rizhi.js'
import Syt from './component/Syt.js'
import Gly from './component/Gly.js'
import Role from './component/Role.js'

function App() {
  return (
    <Router>
      <div className='zyx'>
        <div className='zyx_left'>
          <p className='zyx_p'>地府管理系统</p>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to='/Obituary'>生死簿</Link>
            </li>
            <li>
              <Link to="/Erotic">勾魂管理</Link>
            </li>
            <li>
              <Link to="/Judge">阎王殿审判记录</Link>
            </li>
            <li>
              <Link to="/Hell">十八层地狱</Link>
            </li>
            <li>
              <Link to="/Samsara">六道轮回</Link>
            </li>
            <li>
              <Link to='/Hellmoney'>冥币管理</Link>
            </li>
            <li>
              <Link to='/Rizhi'>日志管理</Link>
            </li>
            <li>
              <Link to='/Syt'>系统管理</Link>
            </li>
            <li>
              <Link to='/Gly'>管理员</Link>
            </li>
            <li>
              <Link to='/Role'>角色权限</Link>
            </li>
          </ul>
        </div>
        <div className='zyx_right'>
          <Switch>
            <Route  exact path="/" >
              <Home />
            </Route>
            <Route path='/Obituary'>
              <Obituary/>
            </Route>
            <Route path='/Erotic'>
              <Erotic/>
            </Route>
            <Route path='/Judge'>
              <Judge/>
            </Route>
            <Route path='/Hell'>
              <Hell/>
            </Route>
            <Route path='/Samsara'>
              <Samsara/>
            </Route>
            <Route path='/Hellmoney'>
              <Hellmoney/>
            </Route>
            <Route path='/Rizhi'>
              <Rizhi/>
            </Route>
            <Route path='/Syt'>
              <Syt/>
            </Route>
            <Route path='/Gly'>
              <Gly/>
            </Route>
            <Route path='/Role'>
              <Role/>
            </Route>
           
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
