import Demo from '../../demo';
import * as React from 'react';
import { IconDemo } from './demo/IconDemo';

// const x = require('!!raw-loader!./demo/IconDemo.tsx');
const code = `
  <Icon name="align-center" />
  <Icon name="align-left" />
  <Icon name="android" />
  <Icon name="arrow-circle-down" />
  <Icon name="spinner" spin />
`;
const IconCodeDemo: React.FunctionComponent = () => {
  return (
    <Demo code={code}>
      <IconDemo />
    </Demo>
  );
};
export default IconCodeDemo;
