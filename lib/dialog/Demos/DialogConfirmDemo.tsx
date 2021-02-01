import Button from '../../button';
import * as React from 'react';
import {confirm} from '../dialog';
type Props = {};
export const DialogConfirmDemo: React.FC<Props> = () => {
  const onClick = ()=>{
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
  }
  return (
    <>
      <Button label="important" icon="external-link" onClick={onClick}>
        Confirm
      </Button>
    </>
  );
};
