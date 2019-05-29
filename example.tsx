import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink as Link } from 'react-router-dom'
import IconExample from './lib/icon/icon.example'
import ButtonExample from './lib/button.example'
import DialogExample from './lib/dialog/dialog.example'
import LayoutExamle from './lib/layout/layout.example'
ReactDOM.render(
  <Router>
    <div className='example'>
      <header>
        <div>r-parts ui</div>
      </header>
      <div>
        <aside>
          <h2>组建</h2>
          <ul>
            <li>
              <Link to='/icon'> icon </Link>
            </li>
            <li>
              <Link to='/button'> button </Link>
            </li>
            <li>
              <Link to='/dialog'> Dialog </Link>
            </li>
            <li>
              <Link to='/layout'> Layout </Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path='/icon' component={IconExample} />
          <Route path='/button' component={ButtonExample} />
          <Route path='/dialog' component={DialogExample} />
          <Route path='/layout' component={LayoutExamle}></Route>
        </main>
      </div>
    </div>
  </Router>,
  document.querySelector('#root')
)
