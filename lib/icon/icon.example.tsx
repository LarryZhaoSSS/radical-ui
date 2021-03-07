import React from 'react';
import { AllIconDemo } from './demo/AllIconDemo';
import {
  ContentCard,
  ContentWrapper,
  Description,
  MainTitle,
  SubTitle,
} from '../helpers/CommonElements';
import IconCodeDemo from './icon.demo';
import { DocTable } from '../DocTable';
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'name',
    Type: `string`,
    Description:
      'Name of the Icon',
    Default: '',
  },
  {
    Name: 'theme',
    Type: `'main' | 'danger' | 'normal' | 'Secondary' | 'Success' | 'info' | 'warning' | 'help'`,
    Description: 'Theme colors of the Icon',
    Default: '',
  },
  {
    Name: 'spin',
    Type: 'boolean',
    Description: 'Whether the Icon spin',
    Default: 'false',
  }
];
const IconExample: React.FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainTitle>Icons</MainTitle>
      <Description>
        use PrimeIcons library, the official icons suite from PrimeTek.
      </Description>
      <IconCodeDemo />
      <SubTitle>List of Icons</SubTitle>
      <ContentCard>
        <AllIconDemo />
      </ContentCard>
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
      <Description>
        It accepts all props which native svg support.
      </Description>
    </ContentWrapper>

  );
};
export default IconExample;
