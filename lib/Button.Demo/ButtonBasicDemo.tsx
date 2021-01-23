import Button from '../button';
import React from 'react';

export const ButtonBasicDemo = () => {
  return (
    <>
      <Button label="important">Submit</Button>
      <Button label="important" disable={true}>
        diable
      </Button>
      <Button>normal</Button>
      <Button disable={true}>disabled</Button>
      <Button label="text">Link</Button>
    </>
  );
};
