import Button from '../../button';
import * as React from 'react';
import { alert } from '../dialog';
type Props = {};
export const DialogAlertDemo: React.FC<Props> = () => {
  return (
    <>
      <Button label="info"
        onClick={() => {
          alert('info', 'This is a notification message');
        }}
      >
        info
      </Button>
      <Button label="Success"
        onClick={() => {
          alert('success', 'success message', 'success');
        }}
      >
        success
      </Button>
      <Button label="danger"
        onClick={() => {
          alert('error hint', 'This is a error message', 'error');
        }}
      >
        error
      </Button>
      <Button label="warning"
        onClick={() => {
          alert('warning hint', 'This is a warning message', 'warning');
        }}
      >
        warning
      </Button>
    </>
  );
};
