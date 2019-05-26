import * as React from 'react'
import './dialog.scss'
import {Fragment, ReactElement,  ReactNode} from 'react';
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";
import ReactDOM from 'react-dom';

interface Props {
  visible: boolean
  buttons?: Array<ReactElement>
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
  const x = props.visible ? <Fragment>
      <div className={sc('mask')} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>title</header>
        <main className={sc('main')}> {props.children}</main>
        {
          props.buttons && props.buttons.length>0 &&
          <footer className={sc('footer')}>
            {props.buttons && props.buttons.map((button, index) =>
              React.cloneElement(button, {key: index})
            )}
          </footer>
        }
      </div>
    </Fragment>
    : null
  return (
    ReactDOM.createPortal(x, document.body)
  )
}
Dialog.defaultProps = {
  closeOnClickMask: false,
}
const modal = (content:  ReactNode ,buttons?: Array<ReactElement>, afterClose?:()=>void)=> {
  const close = ()=> {
    ReactDOM.render(React.cloneElement(component,{visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    afterClose && afterClose()
  }
  const component = <Dialog onClose={()=>{close();afterClose && afterClose()}}
                            visible={true}
                            buttons={buttons}
  >
    {content}
  </Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
  return close
}
const alert = (content: string) => {
  const button =<button onClick={()=>close()}>ok</button>
  const close = modal(content, [button])
}
const confirm = (content: string, yes?:()=>void, no?:()=>void)=>{

  const onYes = () => {
    close()
    yes && yes()
  }
  const onNo = () => {
    close()
    no && no()
  }

  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ]
  const close = modal(content,buttons)

}

export {alert, confirm, modal}
export default Dialog