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
  const [selectedValues, setSelectedValues] = useState<string[]>([
    // '1.1',
    // '1.2',
  ]);
  const [selectedValue, setSelectedValue] = useState('1');
  const onChange = (selected: string[]) => {
    setSelectedValues(selected);
  };
  const onChangeOne = (selected: string) => {
    setSelectedValue(selected);
  };
  return (
    <div>
      Tree
      <h1>展示tree</h1>
      {selectedValues.join(',')}
      <div style={{ width: 200 }}>
        <Tree
          sourceData={array}
          selected={selectedValues}
          onChange={onChange}
          multiple={true}
        />
      </div>
      <h2>single selected</h2>
      <div style={{ width: 200, marginTop: 20 }}>
        <Tree
          sourceData={array}
          selected={selectedValue}
          onChange={onChangeOne}
          multiple={false}
        />
      </div>
    </div>
  );
};

export { TreeExample };
