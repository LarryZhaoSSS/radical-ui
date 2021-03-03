import Demo from '../../demo';
import * as React from 'react';
const code = `
// Default

<Tab defaultIndex={0} onSelect={(key)=>{console.log(key)}} type="line">
  <TabItem label="Header I">this is content one</TabItem>
  <TabItem label="Header II">this is content two</TabItem>
  <TabItem label="Header III">this is content three</TabItem>
</Tab>

// Disabled

<Tab defaultIndex={0} onSelect={(key)=>{console.log(key)}} type="line">
  <TabItem label="Header I">this is content one</TabItem>
  <TabItem label="Header II">this is content two</TabItem>
  <TabItem label="Header III" disabled>this is content three</TabItem>
</Tab>

// Card type

<Tab defaultIndex={0} onSelect={(key)=>{console.log(key)}} type="card">
  <TabItem label="card1">this is card one</TabItem>
  <TabItem label="card2">this is card two</TabItem>
  <TabItem disabled label="disabled">this is card three</TabItem>
</Tab>
`;
export const TabCodeDemo = () => {
  return <Demo code={code}></Demo>;
};