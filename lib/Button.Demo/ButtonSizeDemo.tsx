import * as React from 'react';
import Button from '../button';
export const ButtonSizeDemo = () => {
  return (
    <>
      <Button label="important" size="small">
        Small
      </Button>
      <Button label="normal">Normal</Button>
      <Button label="important" size="large">
        Large
      </Button>
    </>
  );
};
