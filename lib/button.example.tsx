import React from 'react';
import { ButtonLoadingDemo } from './Button.Demo/BottonLoadingDemo';
import { ButtonBasicDemo } from './Button.Demo/ButtonBasicDemo';
import { ButtonCodeDemo } from './Button.Demo/ButtonCodeDemo';
import { ButtonIconDemo } from './Button.Demo/ButtonIconDemo';
import { ButtonServerityDemo } from './Button.Demo/ButtonServerityDemo';
import { ContentWrapper } from './helpers/CommonElements';
import {
  ContentCard,
  Description,
  MainTitle,
  SubTitle,
} from './helpers/CommonElements';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainTitle>Button</MainTitle>
      <Description>
        Button is an extension to standard input element with icons and theming.
      </Description>
      <ContentCard>
        <SubTitle>Basic</SubTitle>
        <ButtonBasicDemo />
        <SubTitle>Severities</SubTitle>
        <ButtonServerityDemo />
        <SubTitle>Loading</SubTitle>
        <ButtonLoadingDemo />
        <SubTitle>Icons</SubTitle>
        <ButtonIconDemo />
      </ContentCard>
      <ButtonCodeDemo />
    </ContentWrapper>
  );
};
export default ButtonExample;
