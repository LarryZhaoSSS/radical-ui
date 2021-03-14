import Demo from '../../demo';
import * as React from 'react';
const code = `
<Message closable title="Success Message Content" type="Success" />
<Message closable title="Info Message Content" type="info" />
<Message closable title="Warning Message Content" type="warning" />
<Message closable title="Error Message Content" type="error" />

`;
export const MessageCodeDemo = () => {
  return <Demo code={code}></Demo>;
};