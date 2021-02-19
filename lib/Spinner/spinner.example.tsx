import * as React from 'react';
import { Spinner } from './Spinner';
import {
  ContentCard,
  ContentWrapper,
  Description,
  MainTitle,
  SubTitle,
} from '../helpers/CommonElements';
import styled from 'styled-components';
import Icon from '../icon/Icon';
import {useState} from 'react';
import { Switch } from '../Switch/Switch';
import { SpinnerCodeDemo } from './SpinnerCodeDemo';
import { DocTable } from '../DocTable';

const SizeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 14px;
  width: 400px;
`;
const CustomWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 14px;
  width: 400px;
`;
const EmbeddedWrapper = styled.div`
  display:flex;
  flex-direction:column;
  padding-left: 14px;
  .r-parts-switch {
    margin-bottom:15px;
  }
`
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'loading',
    Type: 'boolean',
    Description: 'Whether Spinner is spinning',
    Default: 'false',
  },
  {
    Name: 'size',
    Type: `small | normal | large`,
    Description:
      'The size of Spin',
    Default: 'normal',
  },
  {
    Name: 'tip',
    Type: 'string',
    Description: 'Customize description content',
    Default: 'undefined',
  },

  {
    Name: 'indicator',
    Type: 'ReactNode',
    Description: 'React node of the spinning indicator',
    Default: 'null',
  },
  {
    Name: 'wrapperClass',
    Type: 'string',
    Description: 'The className of spinner wrapper when does not have indicator property ',
    Default: 'undefined',
  }
];
export const SpinnerExample = () => {
  const [loading,setLoading] = useState<boolean>(true)
  return (
    <ContentWrapper>
      <MainTitle>Spinner</MainTitle>
      <Description>Spinner is a process status indicator.</Description>
      <ContentCard>
        <SubTitle>Size</SubTitle>
        <SizeWrapper>
          <Spinner size={'small'} loading={true}/>
          <Spinner loading={true} />
          <Spinner size={'large'} loading={true} />
        </SizeWrapper>
        <SubTitle>Tip</SubTitle>
        <CustomWrapper>
          <Spinner loading={true} tip="Loading..." />
        </CustomWrapper>

        <SubTitle>Custom</SubTitle>
        <CustomWrapper>
          <Spinner
            loading={true}
            indicator={<Icon style={{ fontSize: '2rem' }} name="spinner" />}
          />
        </CustomWrapper>
        <SubTitle>Embedding into a content</SubTitle>
        <EmbeddedWrapper>
        <Switch value={loading} onChange={(value)=>{setLoading(value)}}/>
          <Spinner
            loading={loading}
          >
            <div style={{height:400,width:400,border:'1px solid #6c757d'}} >more details...</div>
          </Spinner>
        </EmbeddedWrapper>
      </ContentCard>
      <SpinnerCodeDemo/>
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
    </ContentWrapper>
  );
};
