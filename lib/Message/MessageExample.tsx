import {
  ContentCard,
  ContentWrapper,
  Description,
  MainTitle,
  SubTitle,
} from '../helpers/CommonElements';
import React from 'react';
import { Message } from './Message';
import { MessageCodeDemo } from './MessageCodeDemo';
import { DocTable } from '../DocTable';
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'title',
    Type: `string`,
    Description:
      'Title of the Message',
    Default: '',
  },
  {
    Name: 'closable',
    Type: 'boolean',
    Description: 'Whether Message can be closed	',
    Default: 'false',
  },
  {
    Name: 'onClose',
    Type: '()=>void',
    Description: 'Called when close animation is finished',
    Default: '()=>void',
  }
];
export const MessageExample = () => {
  return (
    <ContentWrapper>
      <MainTitle>Message</MainTitle>
      <Description>Messages is used to display inline messages with various severities.</Description>
      <ContentCard>
        <SubTitle>Severities</SubTitle>
        <Message closable title="Success Message Content" type="Success" />
        <Message closable title="Info Message Content" type="info" />
        <Message closable title="Warning Message Content" type="warning" />
        <Message closable title="Error Message Content" type="error" />
      </ContentCard>
      <MessageCodeDemo/>
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
    </ContentWrapper>
  );
};
