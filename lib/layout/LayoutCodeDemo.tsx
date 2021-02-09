import Demo from '../../demo';
import * as React from 'react';
const code = `
<Layout style={{ height: 500, width: 500 }} className="hi">
    <Header className="x">header</Header>
    <Content className="y">content</Content>
    <Footer className="x">footer</Footer>
</Layout>

<Layout style={{ height: 500, width: 500 }} className="hi">
  <Header className="x">header</Header>
    <Layout>
      <Aside className="z">aside</Aside>
      <Content className="y">content</Content>
    </Layout>
  <Footer className="x">footer</Footer>
</Layout>

<Layout style={{ height: 500, width: 500 }} className="hi">
  <Header className="x">header</Header>
    <Layout style={{ flexDirection: 'row' }}>
      <Content className="y">content</Content>
      <Aside className="z">aside</Aside>
    </Layout>
  <Footer className="x">footer</Footer>
</Layout>

<Layout style={{ height: 500, width: 500}} className="hi">
  <Aside className="z">aside</Aside>
  <Layout>
    <Header className="x">header</Header>
    <Content className="y">content</Content>
    <Footer className="x">footer</Footer>
  </Layout>
</Layout>
`;
export const LayoutCodeDemo = () => {
  return <Demo code={code}></Demo>;
};
