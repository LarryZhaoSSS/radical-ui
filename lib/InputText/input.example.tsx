import * as React from 'react';
import {
  ContentCard,
  ContentWrapper,
  Description,
  MainTitle,
  SubTitle,
} from '../helpers/CommonElements';
import Input from './input';
import { InputCodeDemo } from './InputCodeDemo';
import { DocTable } from '../DocTable';
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'size',
    Type: `large | small`,
    Description: 'The size of the input box',
    Default: '',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Description:
      'When present, it specifies that the component should be disabled.',
    Default: '',
  },
  {
    Name: 'icon',
    Type: 'string',
    Description: 'The suffix icon for the Input',
    Default: '',
  },
  {
    Name: 'prepend',
    Type: 'ReactNode',
    Description: 'The prepend for the Input',
    Default: '',
  },
  {
    Name: 'append',
    Type: 'ReactNode',
    Description: 'The append for the Input',
    Default: '',
  }
];
type Props = {};
export const InputExample: React.FC<Props> = () => {
  return (
    <ContentWrapper>
      input-example
      <MainTitle>InputText</MainTitle>
      <Description>
        InputText is an extension to standard input element with theming and
        keyfiltering.
      </Description>
      <ContentCard>
        <SubTitle>Basic</SubTitle>
        <Input placeholder="username" />
        <SubTitle>Disabled</SubTitle>
        <Input disabled placeholder="disabled input" />
        <SubTitle>With icon</SubTitle>
        <Input icon="search" placeholder="input with icon" />
        <SubTitle>Sizes</SubTitle>
        <Input
          defaultValue="large size"
          size="large"
          style={{ marginRight: 30 }}
        />
        <Input placeholder="small size" size="small" />
        <SubTitle>Prepend and append</SubTitle>
        <Input defaultValue="google" prepend="https://" append=".com" />
        <Input prepend="$" defaultValue="100,000" style={{ marginLeft: 30 }} />
      </ContentCard>
      <InputCodeDemo />
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
      <Description>
        Input passes any valid attribute to the underlying input element.
        Extended properties are as follows;
      </Description>
    </ContentWrapper>
  );
};
