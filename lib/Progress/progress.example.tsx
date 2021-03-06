import * as React from 'react'
import { ContentCard, ContentWrapper, Description, MainTitle, SubTitle } from '../helpers/CommonElements';
import { Progress } from './Progress';

export const ProgressExample = ()=>{
  return <ContentWrapper>
    <MainTitle>Progress</MainTitle>
    <Description>ProgressBar is a process status indicator</Description>
    <ContentCard>
      <SubTitle>Basic</SubTitle>
      <Progress percent={40}/>
      <SubTitle>Custom theme</SubTitle>
      <Progress percent={40} theme="danger"  />
      <SubTitle>Custom size</SubTitle>
      <Progress percent={40} strokeHeight={20}  />
      <SubTitle>Custom text</SubTitle>
      <Progress percent={50} format={(currentPercent)=>`${currentPercent}/100`}  />
      <SubTitle>No text</SubTitle>
      <Progress percent={40} showText={false}/>
    </ContentCard>
  </ContentWrapper>
}