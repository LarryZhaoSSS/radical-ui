import React from 'react';
import './importIcons';
import './icon.scss';
import { ThemeColor } from '../helpers/CommonTypes';
import classnames from 'classnames';
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  theme?:ThemeColor;
  spin?:boolean;
}
const generateClasses = (extraClass:string | undefined,themeType:ThemeColor | undefined,spin?:boolean)=>{
  return classnames({
    'r-parts-icon':true,
    [`${extraClass}`]:extraClass,
    [`color-${themeType}`]:themeType,
    'spin':spin
  })
}
const Icon: React.FunctionComponent<IconProps> =
  ({className, name,theme,spin, ...restProps}) => {

    return (
      <svg className={generateClasses(className,theme,spin)}
           {...restProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
    );
  };

export default Icon;
