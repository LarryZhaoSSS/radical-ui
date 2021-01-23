import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import classes from './helpers/classnames';
import './button.scss';
type LabelType =
  | 'important'
  | 'danger'
  | 'normal'
  | 'text'
  | 'Secondary'
  | 'Success'
  | 'info'
  | 'warning'
  | 'help';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: LabelType;
  disable?: boolean;
}

const Button: React.FunctionComponent<Props> = props => {
  const { className, children, label, disable, ...rest } = props;
  return (
    <button
      className={classes(
        'r-parts-button',
        `r-parts-button-${label}`,
        disable === true ? `disabled` : '',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  label: 'normal',
  disable: false,
};
export default Button;
