import * as React from 'react';
import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react';
import classes from './helpers/classnames';
import './button.scss';
import Icon from './icon/Icon';
import { iconNames } from './icon/iconNames';
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
  icon?: string | ReactNode;
  size?: 'normal' | 'small' | 'large';
}

const Button: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    label,
    disable,
    loading,
    icon,
    size,
    ...rest
  } = props;
  const isValidIconName = useMemo(() => {
    if (!icon) {
      return false;
    }
    if (typeof icon === 'string' && iconNames.includes(icon)) {
      return true;
    }
    return false;
  }, [icon]);
  return (
    <button
      className={classes(
        'r-parts-button',
        `r-parts-button-${label}`,
        `r-parts-button-size-${size}`,
        loading === true ? 'loading' : '',
        disable === true ? `disabled` : '',
        className,
      )}
      {...rest}
    >
      {loading && <Icon name="spinner" className="loading-icon" />}
      {isValidIconName ? <Icon name={icon as string} /> : icon}
      {children}
    </button>
  );
};
Button.defaultProps = {
  label: 'normal',
  disable: false,
  loading: false,
  size: 'normal',
};
export default Button;
