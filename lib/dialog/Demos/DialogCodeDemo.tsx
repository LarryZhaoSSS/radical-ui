import Demo from '../../../demo';
import * as React from 'react';
const code = `
// basic use
import Button from '../../button';
import * as React from 'react';
import Dialog from '../dialog';
import { useState } from 'react';
type Props = {};
export const DialogBasicDemo: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button label="important" icon="external-link" onClick={()=>setVisible(true)}>
        Show
      </Button>
      <Dialog
        visible={visible}
        closeOnClickMask={true}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div>main-content</div>
      </Dialog>
    </>
  );
};

// without mask

import Button from '../../button';
import * as React from 'react';
import Dialog from '../dialog';
import { useState } from 'react';
type Props = {};
export const WithoutModalDemo: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button label="important" icon="external-link" onClick={()=>setVisible(true)}>
        Show
      </Button>
      <Dialog
        visible={visible}
        closeOnClickMask={true}
        modal={false}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div>main-content222</div>
      </Dialog>
    </>
  );
};

// confirm

import Button from '../../button';
import * as React from 'react';
import {confirm} from '../dialog';
type Props = {};
export const DialogConfirmDemo: React.FC<Props> = () => {
  const onClick = ()=>{
    confirm(
      'Confirmation',
      'Are you sure you want to proceed?',
      () => {
        console.log('click on yes');
      },
      () => {
        console.log('click on no');
      },
    );
  }
  return (
    <>
      <Button label="important" icon="external-link" onClick={onClick}>
        Confirm
      </Button>
    </>
  );
};
`;
export const DialogCodeDemo = () => {
  return <Demo code={code}></Demo>;
};
