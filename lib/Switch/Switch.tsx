import * as React from 'react'
import { useMemo } from 'react';
import classnames from 'classnames'
import './switch.scss'
type Props  = {
  value:boolean;
  onChange?:(value:boolean)=>void
  disabled?:boolean
  className?:string
}
export const Switch:React.FC<Props> = (props)=>{
  const  {value,onChange,disabled,className} = props
  const classNames = useMemo(()=>{
    return classnames({
      'r-parts-switch':true,
      checked:value,
      'disabled':disabled,
      className
    })
  },[value,disabled])
  return <>
  <button className={classNames} onClick={()=>{onChange?.(!value)}}>
    <span></span>
  </button>
  </>
}