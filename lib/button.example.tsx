import React from 'react';
import { ButtonBasicDemo } from './Button.Demo/ButtonBasicDemo';
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
      </ContentCard>
    </ContentWrapper>
  );
};
export default ButtonExample;
