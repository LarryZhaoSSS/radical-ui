import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';
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
export default function() {
  const [x, setX] = useState(false);
  const openModal = () => {
    const close = modal(
      <h1>
        你好，点我关闭<button onClick={() => close()}>close</button>
      </h1>,
    );
  };
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
      </ContentCard>
      <DialogCodeDemo/>
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />

      <button onClick={() => setX(!x)}>click</button>
      <Dialog
        visible={x}
        closeOnClickMask={true}
        onClose={() => {
          setX(false);
        }}
      >
        <div>main-content</div>
      </Dialog>
      <button
        onClick={() => {
          alert('hahaa');
        }}
      >
        alert trigger
      </button>
      <button
        onClick={() => {
          confirm(
            'Confirmation',
            'confirm content',
            () => {
              console.log('点了yes');
            },
            () => {
              console.log('点了no');
            },
          );
        }}
      >
        confirm trigger
      </button>
      <button
        onClick={() => {
          modal(<h2>modal hi</h2>);
        }}
      >
        modal trigger
      </button>
      <button onClick={openModal}>close in content</button>
    </ContentWrapper>
  );
}
