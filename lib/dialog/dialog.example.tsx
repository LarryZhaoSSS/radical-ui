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
      </ContentCard>
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
