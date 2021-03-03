import React from 'react';
import { ContentCard, ContentWrapper, SubTitle } from '../helpers/CommonElements';
import Tab from './index';
const { TabItem } = Tab;
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
            this is content three
          </TabItem>
        </Tab>
      </ContentCard>
    </ContentWrapper>
  );
};
