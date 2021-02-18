import * as React from 'react'
import Menu from './index'
const {MenuItem,SubMenu} = Menu
export const MenuExample = ()=>{
  return <div className="menu-demos">
    <Menu
          defaultIndex={'0'}
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <MenuItem>Menuitem 0</MenuItem>
          <MenuItem disabled>Menuitem 1</MenuItem>
          <MenuItem>Menuitem 2</MenuItem>
        </Menu>

        <Menu
          defaultIndex={'0'}
          mode='vertical'
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <MenuItem>Menuitem 0</MenuItem>
          <MenuItem disabled>Menuitem 1</MenuItem>
          <MenuItem>Menuitem 2</MenuItem>
        </Menu>
        <h2>Menu has dropdown</h2>
        <h4>horizon</h4>
        <Menu
          defaultIndex={'0'}
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <MenuItem>Menuitem 0</MenuItem>
          <MenuItem>Menuitem 1</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>Menuitem 0-0</MenuItem>
            <MenuItem>Menuitem 1-1</MenuItem>
          </SubMenu>
        </Menu>
        <h4>vertical</h4>
        <Menu
          defaultIndex={'0'}
          mode='vertical'
          defaultOpenSubMenus={['2']}
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <MenuItem>Menuitem 0</MenuItem>
          <MenuItem>Menuitem 1</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>Menuitem 0-0</MenuItem>
            <MenuItem>Menuitem 1-1</MenuItem>
          </SubMenu>
        </Menu>
  </div>
}