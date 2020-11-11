import * as React from 'react';
import { Tree, SourceDataItem } from './tree';
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
    '1.1',
    '1.2',
  ]);
  const onChange = (item: SourceDataItem, bool: boolean) => {
    if (bool) {
      setSelectedValues([...selectedValues, item.value]);
    } else {
      setSelectedValues(selectedValues.filter((v) => v !== item.value));
    }
  };
  return (
    <div>
      Tree
      <h1>展示tree</h1>
      {selectedValues.join(',')}
      <div style={{ width: 200 }}>
        <Tree
          sourceData={array}
          selectedValues={selectedValues}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export { TreeExample };
