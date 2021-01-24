import Icon from '../icon/Icon';
import * as React from 'react';
import Button from '../button';

export const ButtonIconDemo = () => {
  return (
    <>
      <Button icon="check" label="important">
        Submit
      </Button>
      <Button icon="search" label="normal">
        Search
      </Button>
      <Button icon={<Icon name="trash" />} label="danger">
        Delete
      </Button>
    </>
  );
};
