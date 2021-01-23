import Button from '../button';
import * as React from 'react';
export const ButtonLoadingDemo = () => {
  return (
    <>
      <Button label="important" loading={true}>
        loading
      </Button>
      <Button label="Success" loading={true}>
        Success
      </Button>
    </>
  );
};
