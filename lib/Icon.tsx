import * as React from 'react'
import  './fonts'

interface IconProps {
  name: string
}
const Icon: React.FunctionComponent<IconProps> = props => {
  return (<span>{props.name}
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${props.name}`}></use>
</svg>
  </span>)
}
export default Icon
