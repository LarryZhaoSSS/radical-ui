import Demo from '../../demo';
import * as React from 'react';
const code = `
// Basic

<Menu defaultIndex={'0'} onSelect={(index) => {console.log(index);}}>
    <MenuItem>MenuItem 0</MenuItem>
    <MenuItem>MenuItem 1</MenuItem>
    <MenuItem>MenuItem 2</MenuItem>
</Menu>

// Disabled MenuItem

<Menu defaultIndex={'0'} onSelect={(index) => {console.log(index);}}>
  <MenuItem>MenuItem 0</MenuItem>
  <MenuItem disabled>MenuItem 1</MenuItem>
  <MenuItem>MenuItem 2</MenuItem>
</Menu>

// Custom MenuItem

<Menu defaultIndex={'0'} onSelect={(index) => {console.log(index);}}>
    <MenuItem><MyMenuItem><Icon name="home"/>Home</MyMenuItem></MenuItem>
    <MenuItem><MyMenuItem><Icon name="calendar"/>Calendar</MyMenuItem></MenuItem>
    <MenuItem><MyMenuItem><Icon name="pencil"/>Edit</MyMenuItem></MenuItem>
    <MenuItem><MyMenuItem><Icon name="file"/>Documentation</MyMenuItem></MenuItem>
</Menu>

// With dropdown

<Menu defaultIndex={'0'} onSelect={(index) => {console.log(index);}}>
    <MenuItem>MenuItem 0</MenuItem>
    <MenuItem>MenuItem 1</MenuItem>
    <SubMenu title='dropdown'>
      <MenuItem>MenuItem 2-0</MenuItem>
      <MenuItem>MenuItem 2-1</MenuItem>
    </SubMenu>
</Menu>

// Vertical Menu

<Menu defaultIndex={'0'} mode='vertical' onSelect={(index) => {console.log(index);}}>
    <MenuItem>MenuItem 0</MenuItem>
    <MenuItem>MenuItem 1</MenuItem>
    <SubMenu title='dropdown-1'>
      <MenuItem>MenuItem 2-0</MenuItem>
      <MenuItem>MenuItem 2-1</MenuItem>
    </SubMenu>
    <SubMenu title='dropdown-2'>
      <MenuItem>MenuItem 3-0</MenuItem>
      <MenuItem>MenuItem 3-1</MenuItem>
    </SubMenu>
</Menu>

// Default open SubMenus

<Menu defaultIndex={'0'} mode='vertical' onSelect={(index) => {console.log(index);}} defaultOpenSubMenus={['2','3']}>
  <MenuItem>MenuItem 0</MenuItem>
  <MenuItem>MenuItem 1</MenuItem>
  <SubMenu title='dropdown-1'>
    <MenuItem>MenuItem 2-0</MenuItem>
    <MenuItem>MenuItem 2-1</MenuItem>
  </SubMenu>
  <SubMenu title='dropdown-2'>
    <MenuItem>MenuItem 3-0</MenuItem>
    <MenuItem>MenuItem 3-1</MenuItem>
  </SubMenu>
</Menu>
`;
export const MenuCodeDemo = () => {
  return <Demo code={code}></Demo>;
};
