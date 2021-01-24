import Demo from '../../demo';
import * as React from 'react';
const code = `
  <Button label="important">Submit</Button>
  <Button label="important" disable={true}>disable</Button>
  <Button>normal</Button>
  <Button disable={true}>disabled</Button>
  <Button label="text">Link</Button>

  <Button label="important">important</Button>
  <Button label="Secondary">secondary</Button>
  <Button label="Success">success</Button>
  <Button label="info">info</Button>
  <Button label="warning">warning</Button>
  <Button label="help">help</Button>
  <Button label="danger">danger</Button>

  <Button label="important" loading={true}>loading</Button>
  <Button label="Success" loading={true}>Success</Button>

  <Button icon="check" label="important">Submit</Button>
  <Button icon="search" label="normal">Search</Button>
  <Button icon={<Icon name="trash" />} label="danger">Delete</Button>

  <Button label="important" size="small">Small</Button>
  <Button label="normal">Normal</Button>
  <Button label="important" size="large">Large</Button>

`;
export const ButtonCodeDemo = () => {
  return <Demo code={code}></Demo>;
};
