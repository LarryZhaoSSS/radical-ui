import * as React from 'react'
import './fonts'
import './icon.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="r-parts-icon" {...props}
    >
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  )
}
export default Icon
