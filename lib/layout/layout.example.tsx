import React from 'react'
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";

export default function () {
  return (
    <div>
      <h1>第1个例子</h1>
      <Layout style={{height:400}} className='hello'>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
      <h1>第2个例子</h1>
      <Layout style={{height:400}}>
        <Header>header</Header>
        <Layout>
          <Aside>aside</Aside>
          <Content>content</Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
      <h1>第3个例子</h1>
      <Layout style={{height:400}}>
        <Header>header</Header>
        <Layout>
          <Content>content</Content>
          <Aside>aside</Aside>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
      <h1>第4个例子</h1>
      <Layout style={{height:400}}>
        <Aside>aside</Aside>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Header>header</Header>
        </Layout>
      </Layout>
    </div>
  )
}