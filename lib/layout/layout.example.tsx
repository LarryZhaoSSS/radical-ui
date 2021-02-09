import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss';
import { ContentCard, ContentWrapper, Description, MainTitle, SubTitle } from '../helpers/CommonElements';
import { LayoutCodeDemo } from './LayoutCodeDemo';
export default function() {
  return (
    <ContentWrapper>
      <MainTitle>Layout</MainTitle>
      <Description>Handling the overall layout of a page.</Description>
      <ContentCard>
      <div>
        <SubTitle>1st example</SubTitle>
        <Layout style={{ height: 500, width: 500 }} className="hi">
          <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
      <SubTitle>2nd example</SubTitle>
        <Layout style={{ height: 500, width: 500 }} className="hi">
          <Header className="x">header</Header>
          <Layout style={{ flexDirection: 'row' }}>
            <Aside className="z">aside</Aside>
            <Content className="y">content</Content>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
      <SubTitle>3rd example</SubTitle>
        <Layout style={{ height: 500, width: 500 }} className="hi">
          <Header className="x">header</Header>
          <Layout style={{ flexDirection: 'row' }}>
            <Content className="y">content</Content>
            <Aside className="z">aside</Aside>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
      <SubTitle>4th example</SubTitle>
        <Layout
          style={{ height: 500, width: 500, flexDirection: 'row' }}
          className="hi"
        >
          <Aside className="z">aside</Aside>
          <Layout>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </Layout>
      </div>
      </ContentCard>
      <LayoutCodeDemo/>

    </ContentWrapper>
  );
}
