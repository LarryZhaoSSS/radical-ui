import Demo from '../../demo';
import * as React from 'react';
const code = `
// Basic
<Progress percent={40}/>

// Custom theme
<Progress percent={40} theme="danger"  />

// Custom size
<Progress percent={40} strokeHeight={20}  />

//Custom text
<Progress percent={50} format={(currentPercent)=>'currentPercent'+'/100'}  />

//No text
<Progress percent={40} showText={false}/>

`;
export const ProgressCodeDemo = () => {
  return <Demo code={code}></Demo>;
};