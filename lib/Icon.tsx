import * as React from 'react'
import './fonts'
import './icon.scss'

interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="r-parts-icon" aria-hidden="true">
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  )
}
export default Icon
