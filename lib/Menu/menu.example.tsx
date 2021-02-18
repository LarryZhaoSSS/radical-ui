import * as React from 'react'
import Menu from './index'
import { ContentCard, ContentWrapper, MainTitle, SubTitle, Description } from '../helpers/CommonElements';
import  Icon  from '../icon/Icon';
const {MenuItem,SubMenu} = Menu
import styled from 'styled-components'
import { MenuCodeDemo } from './MenuCodeDemo';
import { DocTable } from '../DocTable';
const MyMenuItem = styled.span`
  display:inline-flex;
  justify-content:center;
  align-items:center;
  vertical-align:top;
  > svg {
    margin-right:4px;
  }
`
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'defaultIndex',
    Type: `string`,
    Description:
      'Key of default selected menu item',
    Default: 'undefined',
  },
  {
    Name: 'className',
    Type: 'string',
    Description: 'Class name of the menu',
    Default: 'undefined',
  },
  {
    Name: 'mode',
    Type: 'vertical | horizontal',
    Description: 'Type of menu',
    Default: 'horizontal',
  },
  {
    Name: 'onSelect',
    Type: '(index:string)=>void',
    Description: 'Called when a menu item is selected',
    Default: '()=>{}',
  },
  {
    Name: 'defaultOpenSubMenus',
    Type: 'string []',
    Description: 'Array with the keys of default opened sub menus',
    Default: '[]',
  }
];
const SubPropertitesData = [
  {
    Name: 'index',
    Type: `string`,
    Description:
      'value of SubMenu',
    Default: 'undefined',
  },
  {
    Name: 'title',
    Type: 'string',
    Description: 'Title of the dropdown',
    Default: 'undefined',
  },
  {
    Name: 'className',
    Type: 'string',
    Description: 'Class name of the SubMenu',
    Default: 'undefined',
  },
];
export const MenuExample = ()=>{
  return <ContentWrapper>
    <MainTitle>Menu</MainTitle>
    <Description>A versatile menu for navigation.</Description>
    <ContentCard>
      <SubTitle>Basic</SubTitle>
      <Menu
          defaultIndex={'0'}
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <MenuItem>MenuItem 0</MenuItem>
          <MenuItem>MenuItem 1</MenuItem>
          <MenuItem>MenuItem 2</MenuItem>
        </Menu>
        <SubTitle>Disabled MenuItem</SubTitle>
        <Menu
          defaultIndex={'0'}
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <MenuItem>MenuItem 0</MenuItem>
          <MenuItem disabled>MenuItem 1</MenuItem>
          <MenuItem>MenuItem 2</MenuItem>
        </Menu>
        <SubTitle>Custom MenuItem</SubTitle>
        <Menu
          defaultIndex={'0'}
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <MenuItem><MyMenuItem><Icon name="home"/>Home</MyMenuItem></MenuItem>
          <MenuItem><MyMenuItem><Icon name="calendar"/>Calendar</MyMenuItem></MenuItem>
          <MenuItem><MyMenuItem><Icon name="pencil"/>Edit</MyMenuItem></MenuItem>
          <MenuItem><MyMenuItem><Icon name="file"/>Documentation</MyMenuItem></MenuItem>
        </Menu>
        <SubTitle>With dropdown</SubTitle>
        <Menu
          defaultIndex={'0'}
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <MenuItem>MenuItem 0</MenuItem>
          <MenuItem>MenuItem 1</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>MenuItem 2-0</MenuItem>
            <MenuItem>MenuItem 2-1</MenuItem>
          </SubMenu>
        </Menu>
        <SubTitle>Vertical Menu</SubTitle>
        <Menu
          defaultIndex={'0'}
          mode='vertical'
          onSelect={(index) => {
            console.log(index);
          }}
        >
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
        <SubTitle>Default open SubMenus </SubTitle>
        <Menu
          defaultIndex={'0'}
          mode='vertical'
          onSelect={(index) => {
            console.log(index);
          }}
          defaultOpenSubMenus={['2','3']}
        >
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
    </ContentCard>
    <MenuCodeDemo/>
    <SubTitle>Menu Props</SubTitle>
    <DocTable columns={PropertiesColumns} data={PropertitesData} />
    <SubTitle>SubMenu Props</SubTitle>
    <DocTable columns={PropertiesColumns} data={SubPropertitesData} />
  </ContentWrapper>
}