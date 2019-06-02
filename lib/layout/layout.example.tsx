import React from 'react'
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import './layout.example.scss'
export default function () {
  return (
    <div>
      <h1>第1个例子</h1>
      <Layout style={{height:500,width: 500}} className='hello'>
        <Header className='x'>header</Header>
        <Content className='y'>content</Content>
        <Footer className='x'>footer</Footer>
      </Layout>
      <h1>第2个例子</h1>
      <Layout style={{height:500,width: 500}}>
        <Header className='x'>header</Header>
        <Layout>
          <Aside className='z'>aside</Aside>
          <Content className='y'>content</Content>
        </Layout>
        <Footer className='x'>footer</Footer>
      </Layout>
      <h1>第3个例子</h1>
      <Layout style={{height:500,width: 500}}>
        <Header className='x'>header</Header>
        <Layout>
          <Content className='y'>content</Content>
          <Aside className='z'>aside</Aside>
        </Layout>
        <Footer className='x'>footer</Footer>
      </Layout>
      <h1>第4个例子</h1>
      <Layout style={{height:500,width: 500}}>
        <Aside className='z'>aside</Aside>
        <Layout>
          <Header className='x'>header</Header>
          <Content className='y'>content</Content>
          <footer className='x'>footer</footer>
        </Layout>
      </Layout>
    </div>
  )
}