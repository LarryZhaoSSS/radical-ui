import Demo from '../../demo';
import * as React from 'react';
const code = `
<Input placeholder="username" />

<Input disabled placeholder="disabled input" />

<Input icon="search" placeholder="input with icon" />

<Input defaultValue="large size" size="large" />

<Input placeholder="small size" size="small" />

<Input defaultValue="google" prepend="https://"  append=".com"/>

<Input prepend="$" defaultValue="100,000" />
`;
export const InputCodeDemo = () => {
  return <Demo code={code}></Demo>;
};