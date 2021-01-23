import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { iconNames } from '../iconNames';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const IconDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7px 7px 28px;
  margin-right: 15px;
`;
type IconDescProps = {
  name: string;
};
const IconDesc: React.FC<IconDescProps> = props => {
  const { name } = props;
  return (
    <IconDescWrapper>
      <Icon name={name} />
      <span>{name}</span>
    </IconDescWrapper>
  );
};
export const AllIconDemo = () => {
  return (
    <Wrapper>
      {iconNames.map((item, index) => {
        return <IconDesc name={item} key={index} />;
      })}
    </Wrapper>
  );
};
