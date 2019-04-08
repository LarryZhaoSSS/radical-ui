import * as React from 'react'
import './fonts'
import './icon.scss'
import  classes from './helpers/classnames'
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className,name, ...restProps} = props
  return (
    <svg className={classes("r-parts-icon", className)} {...restProps}
    >
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}
export default Icon
