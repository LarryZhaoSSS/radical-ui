import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { Transition } from '../Transition/Transition';
import Icon from '../icon/Icon';
import './message.scss';
export type MessageType = 'Success' | 'info' | 'warning' | 'error';

export interface MessageProps {
  title: string;
  type?: MessageType;
  onClose?: () => void;
  closable?: boolean;
}
const alertIconMap = {
  Success: <Icon name="check" />,
  warning: <Icon name="exclamation-triangle" />,
  error: <Icon name="times-circle" />,
  info: <Icon name="exclamation-circle" />,
};
const generateAlertIcon = (type?: MessageType) => {
  if (type) {
    return alertIconMap?.[type] || <></>;
  }
  return <></>;
};
export const Message: FC<MessageProps> = props => {
  const [hide, setHide] = useState(false);
  const { title,  type, onClose, closable } = props;
  const classes = classNames('r-parts-alert', {
    [`r-parts-alert-${type}`]: type,
  });

  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };
  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-top">
      <div className={classes}>
          <span className="r-parts-title-icon">{generateAlertIcon(type)}</span>
          <span>{title}</span>
          {closable && (
            <span className="r-parts-alert-close" onClick={handleClose}>
              <Icon name="times" />
            </span>
          )}
      </div>
    </Transition>
  );
};

Message.defaultProps = {
  type: 'info',
  closable: true,
};
