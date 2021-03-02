import React from 'react';
import { ContentCard, ContentWrapper } from '../helpers/CommonElements';
import Tab from './index';
const { TabItem } = Tab;
export const TabExample = () => {
  return (
    <ContentWrapper>
      tab example
      <ContentCard>
        <Tab defaultIndex={0} onSelect={function noRefCheck() {}} type="line">
          <TabItem label="选项卡一">this is content one</TabItem>
          <TabItem label="选项卡二">this is content two</TabItem>
          <TabItem label="用户管理">this is content three</TabItem>
        </Tab>
        <Tab defaultIndex={0} onSelect={function noRefCheck() {}} type="card">
          <TabItem label="card1">this is card one</TabItem>
          <TabItem label="card2">this is content two</TabItem>
          <TabItem disabled label="disabled">
            this is content three
          </TabItem>
        </Tab>
      </ContentCard>
    </ContentWrapper>
  );
};
