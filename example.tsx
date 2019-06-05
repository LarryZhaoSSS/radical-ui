import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, NavLink as Link} from 'react-router-dom'
import './example.scss'
// import IconExample from './lib/icon/icon.example'
import ButtonExample from './lib/button.example'
import DialogExample from './lib/dialog/dialog.example'
import LayoutExamle from './lib/layout/layout.example'
import Header from "./lib/layout/header";
import Aside from "./lib/layout/aside";
import Footer from "./lib/layout/footer";
import Content from "./lib/layout/content";
import Layout from "./lib/layout/layout";
import IconDemo from "./lib/icon/icon.demo";
import FormExample from "./lib/form/form.example"
require('!!raw-loader!./lib/icon/icon.example.tsx')
ReactDOM.render(
  <Router>
    <Layout className='site-page'>
      <Header>
        <div>r-parts ui</div>
      </Header>
      <Layout>
        <Aside className='site-aside'>
          <h2>组建</h2>
          <ul>
            <li>
              <Link to='/icon'> icon </Link>
            </li>
            <li>
              <Link to='/dialog'> Dialog </Link>
            </li>
            <li>
              <Link to='/layout'> Layout </Link>
            </li>
            <li><Link to='/form'>Form</Link></li>
          </ul>
        </Aside>
        <Content className='site-main'>
          <Route path='/icon' component={IconDemo}/>
          <Route path='/button' component={ButtonExample}/>
          <Route path='/dialog' component={DialogExample}/>
          <Route path='/layout' component={LayoutExamle}/>
          <Route path='/form' component={FormExample}/>
        </Content>
      </Layout>
      <Footer className='site-footer'>&copy; larrysss</Footer>
    </Layout>
  </Router>,
  document.querySelector('#root')
)
