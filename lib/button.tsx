import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import classes from './helpers/classnames';
import './button.scss';
import Icon from './icon/Icon';
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
  loading?: boolean;
}

const Button: React.FunctionComponent<Props> = props => {
  const { className, children, label, disable, loading, ...rest } = props;
  return (
    <button
      className={classes(
        'r-parts-button',
        `r-parts-button-${label}`,
        loading === true ? 'loading' : '',
        disable === true ? `disabled` : '',
        className,
      )}
      {...rest}
    >
      {loading && <Icon name="spinner" />}
      {children}
    </button>
  );
};
Button.defaultProps = {
  label: 'normal',
  disable: false,
  loading: false,
};
export default Button;
