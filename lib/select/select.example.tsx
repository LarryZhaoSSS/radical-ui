import * as React from 'react';
import styled from 'styled-components';
import {
  ContentCard,
  ContentWrapper,
  SubTitle,
} from '../helpers/CommonElements';
import { SelectCodeDemo } from './SelectCodeDemo';
import { DocTable } from '../DocTable';

import Select from './index';
const { Option } = Select;
const MultiWrapper = styled.div`
  width: 500px;
`;
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'defaultValue',
    Type: `string | string[]`,
    Description: 'Initial selected option',
    Default: '',
  },
  {
    Name: 'placeholder',
    Type: 'ReactNode',
    Description: 'Placeholder of select',
    Default: '',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Description: 'disabled',
    Default: 'false',
  },
  {
    Name: 'multiple',
    Type: 'boolean',
    Description: 'Multiple mode of select',
    Default: 'false',
  },
  {
    Name: 'onChange',
    Type: '(currentValue,selectedTags?)=>void',
    Description: 'Called when select an option or input value change',
    Default: '',
  },
  {
    Name: 'onVisibleChange',
    Type: '(visible: boolean) => void',
    Description: 'Called when dropdown items show',
    Default: '',
  },
];
const OptionPropertitesData = [

  {
    Name: 'disabled',
    Type: 'boolean',
    Description: 'Disable this option',
    Default: 'false',
  },
  {
    Name: 'value',
    Type: `string | string[]`,
    Description: 'Default to filter with this property',
    Default: '',
  },
];
export const SelectExample = () => {
  return (
    <ContentWrapper>
      selectExample
      <ContentCard>
        <SubTitle>Basic</SubTitle>
        <Select
          onChange={value => {
            console.log(value);
          }}
          onVisibleChange={visible => {}}
          placeholder="请选择"
        >
          <Option value="London" />
          <Option value="New York" />
          <Option value="Paris" />
          <Option value="Rome" />
        </Select>
        <SubTitle>Multi select</SubTitle>
        <MultiWrapper>
          <Select
            multiple
            onChange={(current, selectedValues) => {
              console.log(selectedValues);
            }}
            onVisibleChange={() => {}}
            placeholder="multi select"
          >
            <Option value="London" />
            <Option value="New York" />
            <Option value="Paris" />
            <Option value="Rome" />
          </Select>
        </MultiWrapper>
        <SubTitle>Disabled</SubTitle>
        <Select disabled placeholder="disabled">
          <Option value="London" />
          <Option value="New York" />
          <Option value="Paris" />
          <Option value="Rome" />
        </Select>
      </ContentCard>
      <SelectCodeDemo />
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
      <SubTitle>Option</SubTitle>
      <DocTable columns={PropertiesColumns} data={OptionPropertitesData} />
    </ContentWrapper>
  );
};
