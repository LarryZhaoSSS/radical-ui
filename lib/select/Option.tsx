import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import Icon from '../icon/Icon';
import { SelectContext } from './Select';
export interface SelectOptionProps {
  index?: string;
  value: string;
  label?: string;
  disabled?: boolean;
}

const Option: FC<SelectOptionProps> = ({
  value,
  label,
  disabled,
  children,
  index,
}) => {
  const { onSelect, selectedValues, multiple } = useContext(SelectContext);
  const isSelected = selectedValues.includes(value);
  const classes = classNames('r-parts-select-item', {
    'is-disabled': disabled,
    'is-selected': isSelected,
  });
  const handleClick = (
    e: React.MouseEvent,
    value: string,
    isSelected: boolean,
  ) => {
    e.preventDefault();
    if (onSelect && !disabled) {
      onSelect(value, isSelected);
    }
  };
  return (
    <li
      key={index}
      className={classes}
      onClick={e => {
        handleClick(e, value, isSelected);
      }}
    >
      {children || (label ? label : value)}
      {multiple && isSelected && <Icon name="check" />}
    </li>
  );
};

Option.displayName = 'Option';

export { Option };
