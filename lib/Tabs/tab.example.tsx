import React from 'react';
import { ContentCard, ContentWrapper, SubTitle } from '../helpers/CommonElements';
import Tab from './index';
import { TabCodeDemo } from './TabCodeDemo';
import { DocTable } from '../DocTable';

const { TabItem } = Tab;
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'defaultIndex',
    Type: `number | undefined`,
    Description:
      'Default active index of the Tab',
    Default: '',
  },
  {
    Name: 'className',
    Type: 'string | undefined',
    Description: 'Style class of the Tab',
    Default: '',
  },
  {
    Name: 'onSelect',
    Type: '(key:number)=>void',
    Description: 'Callback to invoke when an active tab is changed.',
    Default: '',
  },
  {
    Name: 'type',
    Type: 'line | card',
    Description: 'Type of the Tab',
    Default: 'line',
  }
];

const TabItemPropertitesData = [
  {
    Name: 'disabled',
    Type: `boolean`,
    Description:
      'Whether the TabItem is disabled',
    Default: 'false',
  },
  {
    Name: 'label',
    Type: 'string',
    Description: 'Name of the TabItem',
    Default: '',
  },

];
export const TabExample = () => {
  return (
    <ContentWrapper>
      tab example
      <ContentCard>
        <SubTitle>Default</SubTitle>
        <Tab defaultIndex={0} onSelect={(key)=>{console.log(key)}} type="line">
          <TabItem label="Header I">this is content one</TabItem>
          <TabItem label="Header II">this is content two</TabItem>
          <TabItem label="Header III">this is content three</TabItem>
        </Tab>
        <SubTitle>Disabled</SubTitle>
        <Tab defaultIndex={0} onSelect={(key)=>{console.log(key)}} type="line">
          <TabItem label="Header I">this is content one</TabItem>
          <TabItem label="Header II">this is content two</TabItem>
          <TabItem label="Header III" disabled>this is content three</TabItem>
        </Tab>
        <SubTitle>Card type</SubTitle>
        <Tab defaultIndex={0} onSelect={(key)=>{console.log(key)}} type="card">
          <TabItem label="card1">this is card one</TabItem>
          <TabItem label="card2">this is card two</TabItem>
          <TabItem disabled label="disabled">
            this is card three
          </TabItem>
        </Tab>
      </ContentCard>
      <TabCodeDemo/>
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
      <SubTitle>TabItem</SubTitle>
      <DocTable columns={PropertiesColumns} data={TabItemPropertitesData} />
    </ContentWrapper>
  );
};
