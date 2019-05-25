import * as React from 'react'
import './dialog.scss'
import {Fragment, ReactElement} from 'react';
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";
import ReactDOM from 'react-dom';

interface Props {
  visible: boolean
  buttons: Array<ReactElement>
  onClose: React.MouseEventHandler
  closeOnClickMask?: boolean
}

const scopedClass = scopedClassMaker('r-parts-dialog')
const sc = scopedClass
const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)

  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (!props.closeOnClickMask) {
      props.onClose(e)
    }
    return
  }
  const x = props.visible?<Fragment>
      <div className={sc('mask')} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>title</header>
        <main className={sc('main')}> {props.children}</main>
        <footer className={sc('footer')}>
          {
            props.buttons.map((button, index)=>{
              React.cloneElement(button,{key:index})
            })
          }
        </footer>
      </div>
    </Fragment>
    : null
  return (
    ReactDOM.createPortal(x, document.body)
  )
}
Dialog.defaultProps={
  closeOnClickMask: false
}
export default Dialog