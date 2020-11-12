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
  const [selected, setSelected] = useState<string[]>(['1.1', '1.2']);
  const onChange = (item: SourceDataItem, bool: boolean) => {
    if (bool) {
      setSelected([...selected, item.value]);
    } else {
      setSelected(selected.filter((v) => v !== item.value));
    }
  };
  return (
    <div>
      Tree
      <h1>展示tree</h1>
      {selected.join(',')}
      <div style={{ width: 200 }}>
        <Tree
          sourceData={array}
          selected={selected}
          onChange={onChange}
          multiple
        />
      </div>
    </div>
  );
};

export { TreeExample };
