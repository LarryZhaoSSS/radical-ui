import * as React from 'react'
import { ContentCard, ContentWrapper, Description, MainTitle, SubTitle } from '../helpers/CommonElements';
import { ProgressBar } from './ProgressBar';
import { ProgressCodeDemo } from './ProgressCodeDemo';
import { DocTable } from '../DocTable';
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'percent',
    Type: `number`,
    Description:
      'Current value of the progress.',
    Default: '',
  },
  {
    Name: 'strokeHeight',
    Type: 'number',
    Description: 'Default height of the ProgressBar',
    Default: '16',
  },
  {
    Name: 'showText',
    Type: 'boolean',
    Description: 'Whether show the text of the ProgressBar',
    Default: '()=>void',
  },
  {
    Name: 'styles',
    Type: 'React.CSSProperties',
    Description: 'Styles of the ProgressBar',
    Default: '',
  },
  {
    Name: 'theme',
    Type: `'main' | 'danger' | 'normal' | 'Secondary' | 'Success' | 'info' | 'warning' | 'help'`,
    Description: 'Theme colors of the ProgressBar',
    Default: 'main',
  }
];
export const ProgressExample = ()=>{
  return <ContentWrapper>
    <MainTitle>ProgressBar</MainTitle>
    <Description>ProgressBar is a process status indicator</Description>
    <ContentCard>
      <SubTitle>Basic</SubTitle>
      <ProgressBar percent={40}/>
      <SubTitle>Custom theme</SubTitle>
      <ProgressBar percent={40} theme="danger"  />
      <SubTitle>Custom size</SubTitle>
      <ProgressBar percent={40} strokeHeight={20}  />
      <SubTitle>Custom text</SubTitle>
      <ProgressBar percent={50} format={(currentPercent)=>`${currentPercent}/100`}  />
      <SubTitle>No text</SubTitle>
      <ProgressBar percent={40} showText={false}/>
    </ContentCard>
    <ProgressCodeDemo/>
    <SubTitle>Properties</SubTitle>
    <DocTable columns={PropertiesColumns} data={PropertitesData} />
  </ContentWrapper>
}