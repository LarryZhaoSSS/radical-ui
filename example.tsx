import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink as Link } from 'react-router-dom';
import './example.scss';
// import IconExample from './lib/icon/icon.example'
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import Header from './lib/layout/header';
import Aside from './lib/layout/aside';
import Footer from './lib/layout/footer';
import Content from './lib/layout/content';
import Layout from './lib/layout/layout';
import FormExample from './lib/form/form.example';
import ScrollExample from './lib/scroll/scroll.example';
import { CitySelectExample } from './lib/citySelected/citySelect.example';
import { TreeExample } from './lib/tree/tree.example';
import IconExample from './lib/icon/icon.example';
import { SwitchExample } from './lib/Switch/Switch.example';
import { MenuExample } from './lib/Menu/menu.example';
import { SpinnerExample } from './lib/Spinner/spinner.example';
import { InputExample } from './lib/InputText/input.example';
import { SelectExample } from './lib/select/select.example';
require('!!raw-loader!./lib/icon/icon.example.tsx');
ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header>
        <div>r-parts ui</div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>Components</h2>
          <ul>
            <li>
              <Link to="/icon"> icon </Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/switch">Switch</Link>
            </li>
            <li>
              <Link to="/dialog"> Dialog </Link>
            </li>
            <li>
              <Link to="/layout"> Layout </Link>
            </li>
            <li>
              <Link to="/input"> Input </Link>
            </li>
            <li>
              <Link to="/select"> Select </Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/spinner">Spinner</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/scroll">Scroll</Link>
            </li>
            <li>
              <Link to="/tree">tree</Link>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/switch" component={SwitchExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/menu" component={MenuExample} />
          <Route path="/form" component={FormExample} />
          <Route path="/scroll" component={ScrollExample} />
          <Route path="/citySelect" component={CitySelectExample} />
          <Route path="/tree" component={TreeExample} />
          <Route path="/spinner" component={SpinnerExample} />
          <Route path="/input" component={InputExample} />
          <Route path="/select" component={SelectExample} />
        </Content>
      </Layout>
      <Footer className="site-footer">&copy; larry-sss</Footer>
    </Layout>
  </Router>,
  document.querySelector('#root'),
);
