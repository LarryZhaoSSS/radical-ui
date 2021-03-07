import * as React from 'react';
import Icon from '../Icon';
import styled from 'styled-components';
const Wrapper = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  max-width: 300px;
  margin-top: 15px;
  > .r-parts-icon {
    margin-right: 30px;
  }
`;

export const IconDemo = () => {
  return (
    <Wrapper>
      <Icon name="align-center" />
      <Icon name="align-left" />
      <Icon name="android" />
      <Icon name="arrow-circle-down" />
      <Icon name="spinner" spin />
      <Icon name="check-circle" theme='Success'  />
    </Wrapper>
  );
};
