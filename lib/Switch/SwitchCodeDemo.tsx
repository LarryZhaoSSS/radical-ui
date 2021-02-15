import Demo from '../../demo';
import * as React from 'react';
const code = `
const [value,setValue] = useState<boolean>(false)
<Switch value={value} onChange={(value)=>{setValue(value)}}/>

const [value2,setValue2] = useState<boolean>(false)
<Switch value={value2} onChange={(val)=>setValue2(val)}  disabled />


const [value3,setValue3] = useState<boolean>(true)
<Switch value={value3} onChange={(value3)=>{setValue3(value3)}}/>

`;
export const SwitchCodeDemo = () => {
  return <Demo code={code}></Demo>;
};