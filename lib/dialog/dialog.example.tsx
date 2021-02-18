import React from 'react';
import {
  ContentCard,
  ContentWrapper,
  Description,
  MainTitle,
  SubTitle,
} from '../helpers/CommonElements';
import { DialogBasicDemo } from './Demos/DialogBasicDemo';
import { WithoutModalDemo } from './Demos/WithoutModalDemo';
import { DialogConfirmDemo } from './Demos/DialogConfirmDemo';
import { DialogCodeDemo } from './Demos/DialogCodeDemo';
import { DocTable } from '../DocTable';
import { DialogAlertDemo } from './Demos/DialogAlertDemo';
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'visible',
    Type: `boolean`,
    Description:
      'Specifies the visibility of the dialog.',
    Default: 'false',
  },
  {
    Name: 'buttons',
    Type: 'Array<ReactElement>',
    Description: 'buttons for the footer',
    Default: 'null',
  },
  {
    Name: 'onClose',
    Type: 'React.MouseEventHandler',
    Description: 'Callback to invoke when dialog is hidden.',
    Default: '()=>void',
  },
  {
    Name: 'closeOnClickMask',
    Type: 'boolean',
    Description: 'Whether to close the modal dialog when the mask (area outside the modal) is clicked',
    Default: 'false',
  },
  {
    Name: 'title',
    Type: 'string',
    Description: 'title of the dialog',
    Default: '',
  },
  {
    Name: 'modal',
    Type: 'boolean',
    Description: 'Defines if background should be blocked when dialog is displayed.',
    Default: 'true',
  },
];
const alertPropsData = [
  {
    Name: 'title',
    Type: `string`,
    Description:
      'title of the alert dialog',
    Default: '',
  },
  {
    Name: 'content',
    Type: 'ReactNode',
    Description: 'content of the dialog',
    Default: 'null',
  },
  {
    Name: 'type',
    Type: 'string',
    Description: `confirm | warning | error | info | success`,
    Default: 'info',
  }
]
export default function() {

  return (
    <ContentWrapper>
      <MainTitle>Dialog</MainTitle>
      <Description>
        Dialog is a container to display content in an overlay window.
      </Description>
      <ContentCard>
        <SubTitle>Basic</SubTitle>
          <DialogBasicDemo />
          <SubTitle>Without Modal</SubTitle>
          <WithoutModalDemo/>
          <SubTitle>Confirmation</SubTitle>
          <DialogConfirmDemo/>
          <SubTitle>information dialog</SubTitle>
          <DialogAlertDemo/>
      </ContentCard>
      <DialogCodeDemo/>
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
      <SubTitle>alert method</SubTitle>
      <DocTable columns={PropertiesColumns} data={alertPropsData} />

    </ContentWrapper>
  );
}
