import React, {ReactElement} from 'react'
import './layout.scss'
import Aside from './aside'
import {scopedClassMaker} from "../classes";
const sc = scopedClassMaker('r-parts-layout')
interface Props extends React.HTMLAttributes<HTMLElement>{
  children: ReactElement | Array<ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props


    const hasAside = (props.children as Array<ReactElement>).length && (props.children as Array<ReactElement>).reduce((result, node) => {
      return result || node.type === Aside
    }, false)

  return (
    <div className={sc('',{extra:[className, hasAside && 'hasAside'].join(' ')})} {...rest}>
      {props.children}
    </div>
  )
}
export default Layout