import * as React from 'react'
import { Tree } from './tree'
import { useState } from 'react';
const TreeExample:React.FC = props=>{
  const [array] = useState([{
    text:'一',
    value:'1',
    children:[
      {
        text:'一/1',
        value:'1.1'
      },
      {
        text:'一/2',
        value:'1.2'
      }
    ]
  }])
  return <div>Tree
    <h1>展示tree</h1>
    <Tree sourceData={array}/>
  </div>
}

export {TreeExample}