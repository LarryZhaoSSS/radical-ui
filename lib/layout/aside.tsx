import React from 'react'
import {scopedClassMaker} from "../classes";
const sc = scopedClassMaker('r-parts-layout')
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props
  return (
    <div className={sc('aside',{extra:className})} {...rest}>{props.children}</div>
  )
}
export default Aside