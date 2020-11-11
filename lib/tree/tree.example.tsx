import * as React from 'react';
import { Tree } from './tree';
import { useState } from 'react';
const TreeExample: React.FC = (props) => {
  const [array] = useState([
    {
      text: '1',
      value: '1',
      children: [
        {
          text: '1.1',
          value: '1.1',
          children: [
            { text: '1.1.1', value: '1.1.1' },
            { text: '1.1.2', value: '1.1.2' },
          ],
        },
        {
          text: '1.2',
          value: '1.2',
        },
      ],
    },
    {
      text: '2',
      value: '2',
      children: [
        {
          text: '2.1',
          value: '2.1',
          children: [
            { text: '2.1.1', value: '2.1.1' },
            { text: '2.1.2', value: '2.1.2' },
          ],
        },
        {
          text: '2.2',
          value: '2.2',
        },
      ],
    },
  ]);
  return (
    <div>
      Tree
      <h1>展示tree</h1>
      <Tree sourceData={array} />
    </div>
  );
};

export { TreeExample };
