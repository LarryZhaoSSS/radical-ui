import React from 'react';
import './city-select.scss';
import ReactDOM from 'react-dom';
import { useState } from 'react';
interface Props {}
const CitySelect: React.FunctionComponent<Props> = props => {
  const [dialogVisible, setDialogVisible] = useState(true);
  const onClick = () => {
    setDialogVisible(true);
  };

  return (
    <>
      <div onClick={onClick}>{props.children}</div>
      {dialogVisible && (
        <Dialog
          onClose={() => {
            setDialogVisible(false);
          }}
        />
      )}
    </>
  );
};
const Dialog: React.FunctionComponent<{ onClose: () => void }> = props => {
  return ReactDOM.createPortal(
    <div className='r-parts-citySelect-dialog' onClick={props.onClose}>
      <header>
        <span className='icon'>&lt;</span>
        <span>选择城市</span>
      </header>
      <div className='currentCity'></div>
      <h2>全部城市</h2>
      <div className='cityIndex'>ABCD...</div>
      <div className='cityList'>所有城市</div>
    </div>,
    document.body
  );
};
export { CitySelect };
