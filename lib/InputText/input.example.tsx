import * as React from 'react';
import {
  ContentCard,
  ContentWrapper,
  Description,
  MainTitle,
  SubTitle,
} from '../helpers/CommonElements';
import Input from './input';
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
        <Input defaultValue="large size" size="lg" style={{marginRight:30}} />
        <Input placeholder="small size" size="sm" />
      </ContentCard>
      <Input disabled placeholder="disabled input" />
      <Input icon="search" placeholder="input with icon" />
      <Input defaultValue="large size" size="lg" />
      <Input placeholder="small size" size="sm" />
    </ContentWrapper>
  );
};
