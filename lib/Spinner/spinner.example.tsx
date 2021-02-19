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
export const SpinnerExample = () => {
  return (
    <ContentWrapper>
      <MainTitle>Spinner</MainTitle>
      <Description>Spinner is a process status indicator.</Description>
      <ContentCard>
        <SubTitle>Size</SubTitle>
        <SizeWrapper>
          <Spinner size={'small'} loading={true} />
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
      </ContentCard>
    </ContentWrapper>
  );
};
