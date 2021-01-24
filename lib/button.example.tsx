import React from 'react';
import { ButtonLoadingDemo } from './Button.Demo/BottonLoadingDemo';
import { ButtonBasicDemo } from './Button.Demo/ButtonBasicDemo';
import { ButtonCodeDemo } from './Button.Demo/ButtonCodeDemo';
import { ButtonIconDemo } from './Button.Demo/ButtonIconDemo';
import { ButtonServerityDemo } from './Button.Demo/ButtonServerityDemo';
import { ButtonSizeDemo } from './Button.Demo/ButtonSizeDemo';
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
    Type: `string`,
    Description:
      'important | danger | normal | text | Secondary | Success | info | warning | help',
    Default: 'normal',
  },
  {
    Name: 'icon',
    Type: 'string | ReactNode',
    Description: 'name of the icon or ReactNode',
    Default: 'null',
  },
  {
    Name: 'size',
    Type: 'string',
    Description: 'Set the size of button',
    Default: 'normal',
  },
  {
    Name: 'loading',
    Type: 'boolean',
    Description: 'set the loading state of the button',
    Default: 'false',
  },
  {
    Name: 'disable',
    Type: 'boolean',
    Description: 'Disabled state of button',
    Default: 'false',
  },
  {
    Name: 'onClick',
    Type: '(event) => void',
    Description: 'handler to handle click event',
    Default: '-',
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
        <SubTitle>Size</SubTitle>
        <ButtonSizeDemo />
      </ContentCard>
      <ButtonCodeDemo />
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
      <Description>
        It accepts all props which native buttons support.
      </Description>
    </ContentWrapper>
  );
};
export default ButtonExample;
