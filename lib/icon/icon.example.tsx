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
    </ContentWrapper>
  );
};
export default IconExample;
