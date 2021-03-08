import React, { FC, useState } from 'react'
import classNames from 'classnames'
import { Transition } from '../Transition/Transition'
import Icon from '../icon/Icon'
import './message.scss'
export type MessageType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  title: string;
  description?: string;
  type?: MessageType;
  onClose?: () => void;
  closable?: boolean;
}


export const Message: FC<AlertProps> = (props) => {
  const [ hide, setHide ] = useState(false)
  const {
    title,
    description,
    type,
    onClose,
    closable
  } = props
  const classes = classNames('viking-alert', {
    [`viking-alert-${type}`]: type,
  })
  const titleClass = classNames('viking-alert-title', {
    'bold-title': description
  })
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }
  return (
    <Transition
      in={!hide}
      timeout={300}
      animation="zoom-in-top"
    >
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="viking-alert-desc">{description}</p>}
        {closable && <span className="viking-alert-close" onClick={handleClose}><Icon name="times"/></span>}
      </div>
    </Transition>
  )
}

Message.defaultProps = {
  type: 'default',
  closable: true,
}
