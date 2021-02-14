import * as React from 'react';
import './dialog.scss';
import { Fragment, ReactElement, ReactNode } from 'react';
import { scopedClassMaker } from '../classes';
import ReactDOM from 'react-dom';
import Button from '../button';
import Icon from '../icon/Icon';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
  title?:string | null | undefined;
  modal?:boolean;
}
type ModalType ='confirm' | 'warning' | 'error' | 'info' | 'success'

const scopedClass = scopedClassMaker('r-parts-dialog');
const sc = scopedClass;
const Dialog: React.FunctionComponent<Props> = props => {
  const onClickClose: React.MouseEventHandler = e => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = e => {
    if (!props.closeOnClickMask) {
      props.onClose(e);
    }
    return;
  };
  const x = props.visible ? (
    <Fragment>
      {
        props.modal && <div className={sc('mask')} onClick={onClickMask}></div>
      }

      <div className={sc('')}>
        <header className={sc('header')}>
          <div className="title">{props?.title?props?.title:'Header'}</div>
          <div className={sc('close')} onClick={onClickClose}>
            <Icon name="times" className="close-icon" />
          </div>
        </header>
        <main className={sc('main')}> {props.children}</main>
        <footer className={sc('footer')}>
          {props?.buttons ? (
            props?.buttons?.map((button, index) =>
              React.cloneElement(button, { key: index }),
            )
          ) : (
            <>
              <Button label="text" icon="times" onClick={onClickClose}>
                cancel
              </Button>
              <Button label="important" icon="check">
                Yes
              </Button>
            </>
          )}
        </footer>
      </div>
    </Fragment>
  ) : null;
  return ReactDOM.createPortal(x, document.body);
};
Dialog.defaultProps = {
  closeOnClickMask: false,
  modal:true
};
const modal = (
  content: ReactNode,
  buttons?: Array<ReactElement>,
  afterClose?: () => void,
  type?: ModalType,
  title?:string
) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    afterClose && afterClose();
  };
  const component = (
    <Dialog
      onClose={() => {
        close();
        afterClose && afterClose();
      }}
      title={title}
      visible={true}
      buttons={buttons}
    >
      {type==='confirm' && <Icon name="exclamation-triangle"/>}
      {
        type === 'info' && <Icon name="info-circle" className="type-icon-info"/>
      }
      {
        type === 'error' && <Icon name="times-circle" className="type-icon-error"/>
      }
      {
        type === 'warning'  && <Icon name="info-circle" className="type-icon-warning"/>
      }
      {
        type === 'success' && <Icon name="check-circle" className="type-icon-success"/>
      }
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};
const alert = (title:string,content: string,type:ModalType = 'info') => {
  const button = <Button label="important" size="normal" onClick={() => close()}>ok</Button>;
  const close = modal(content, [button],()=>{},type,title);
};
const confirm = (title:string,content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };

  const buttons = [
    <Button label="text" onClick={onNo}>No</Button>,
    <Button label="important" icon="check" onClick={onYes}>Yes</Button>
  ];
  const close = modal(content, buttons,()=>{},'confirm');
};

export { alert, confirm, modal };
export default Dialog;
