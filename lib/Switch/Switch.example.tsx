import * as React from 'react'
import { Switch } from './Switch'
import { useState } from 'react';
import { ContentCard, ContentWrapper, Description, MainTitle, SubTitle } from '../helpers/CommonElements';
import { SwitchCodeDemo } from './SwitchCodeDemo';
import { DocTable } from '../DocTable';
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'value',
    Type: `boolean`,
    Description:
      'Specifies whether a Switch should be checked or not',
    Default: 'false',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Description: 'When present, it specifies that the component should be disabled.',
    Default: 'false',
  },
  {
    Name: 'onChange',
    Type: '(value:boolean)=>void',
    Description: 'Callback to invoke on value change.',
    Default: '()=>void',
  },
  {
    Name: 'className',
    Type: 'string | undefined',
    Description: 'Style class of the element.',
    Default: 'undefined',
  }
];
export const SwitchExample = ()=>{
  const [value,setValue] = useState<boolean>(false)
  const [value2,setValue2] = useState<boolean>(false)
  const [value3,setValue3] = useState<boolean>(true)
  return (
    <ContentWrapper>
      <MainTitle>Switch</MainTitle>
      <Description>Switch is used to select a boolean value.</Description>
      <ContentCard>
        <SubTitle>Basic</SubTitle>
        <Switch value={value} onChange={(value)=>{setValue(value)}}/>
        <SubTitle>Disabled</SubTitle>
        <Switch value={value2} onChange={(val)=>setValue2(val)}  disabled />
        <SubTitle>Preselection</SubTitle>
        <Switch value={value3} onChange={(value3)=>{setValue3(value3)}}/>
      </ContentCard>
      <SwitchCodeDemo/>
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
    </ContentWrapper>
  )
}