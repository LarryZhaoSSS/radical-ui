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
