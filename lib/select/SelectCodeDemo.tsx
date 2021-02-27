import Demo from '../../demo';
import * as React from 'react';
const code = `
import Select from './index';
const { Option } = Select;

<Select onChange={value => {console.log(value)}} onVisibleChange={visible => {}} placeholder="请选择">
 <Option value="London" />
 <Option value="New York" />
 <Option value="Paris" />
 <Option value="Rome" />
</Select>

<Select multiple onChange={(current, selectedValues) => {console.log(selectedValues);}} onVisibleChange={() => {}} placeholder="multi select">
 <Option value="London" />
 <Option value="New York" />
 <Option value="Paris" />
 <Option value="Rome" />
</Select>

<Select disabled placeholder="disabled">
  <Option value="London" />
  <Option value="New York" />
  <Option value="Paris" />
  <Option value="Rome" />
</Select>
`;
export const SelectCodeDemo = () => {
  return <Demo code={code}></Demo>;
};
