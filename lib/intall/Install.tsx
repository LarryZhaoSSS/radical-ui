import { ContentWrapper, Description, MainTitle, SubTitle } from '../helpers/CommonElements'
import React from 'react'
import Demo from '../../demo';
const installCode = `
npm i radical-ui -S

yarn add radical-ui
`
const importCode = `
import { Button } from 'radical-ui/Button;

import { Message } from 'radical-ui/Message;

`
export const InstallPage = ()=>{
  return <ContentWrapper>
    <MainTitle>Setup</MainTitle>
    <Description>radical-ui is a rich set of PrimeFaces components for React.</Description>
    <SubTitle>Download</SubTitle>
    <Description>radical-ui is available at npm, if you have an existing application run the following commands to download radical-ui to your project.</Description>
    <Demo code={installCode}></Demo>
    <SubTitle>import</SubTitle>
    <Description>Path of each component is available at the "import" section of a component documentation.</Description>
    <Demo code={importCode}></Demo>
  </ContentWrapper>
}