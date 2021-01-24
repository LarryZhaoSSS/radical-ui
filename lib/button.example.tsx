import React from 'react';
import { ButtonLoadingDemo } from './Button.Demo/BottonLoadingDemo';
import { ButtonBasicDemo } from './Button.Demo/ButtonBasicDemo';
import { ButtonCodeDemo } from './Button.Demo/ButtonCodeDemo';
import { ButtonIconDemo } from './Button.Demo/ButtonIconDemo';
import { ButtonServerityDemo } from './Button.Demo/ButtonServerityDemo';
import { DocTable } from './DocTable';
import { ContentWrapper } from './helpers/CommonElements';
import {
  ContentCard,
  Description,
  MainTitle,
  SubTitle,
} from './helpers/CommonElements';
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'label',
    Type: 'string',
    Description: 'null',
    Default: 'Description',
  },
  {
    Name: 'icon',
    Type: 'string',
    Description: 'null',
    Default: 'Name of the icon.',
  },
];
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
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
    </ContentWrapper>
  );
};
export default ButtonExample;
