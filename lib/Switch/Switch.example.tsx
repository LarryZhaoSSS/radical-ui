import * as React from 'react'
import { Switch } from './Switch'
import { useState } from 'react';

export const SwitchExample = ()=>{
  const [value,setValue] = useState<boolean>(false)
  const [value2,setValue2] = useState<boolean>(true)
  return (
    <div className="switch-example">
     <Switch value={value} onChange={(value)=>{setValue(value)}}/>
     <Switch value={value2} onChange={(val)=>setValue2(val)}  disabled />
    </div>
  )
}