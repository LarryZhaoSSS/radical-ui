import Demo from '../../demo';
import * as React from 'react';
const code = `
 // size

 <Spinner size={'small'} loading={true} />
 <Spinner loading={true} />
 <Spinner size={'large'} loading={true} />

 // tip

 <Spinner loading={true} tip="Loading..." />

 // custom

 <Spinner loading={true} indicator={<Icon style={{ fontSize: '2rem' }} name="spinner" />} />

 // Embedding into a content

<Spinner loading={loading}>
  <div style={{height:400,width:400,border:'1px solid #6c757d'}} >more details...</div>
</Spinner>

`;
export const SpinnerCodeDemo = () => {
  return <Demo code={code}></Demo>;
};