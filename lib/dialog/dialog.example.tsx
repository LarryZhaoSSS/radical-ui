import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';

export default function() {
  const [x, setX] = useState(true);
  const openModal = () => {
    const close = modal(
      <h1>
        你好，点我关闭<button onClick={() => close()}>close</button>
      </h1>,
    );
  };
  return (
    <div>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog
        visible={x}
        closeOnClickMask={true}
        onClose={() => {
          setX(false);
        }}
      >
        <div>main-content</div>
      </Dialog>
      <button
        onClick={() => {
          alert('hahaa');
        }}
      >
        alert trigger
      </button>
      <button
        onClick={() => {
          confirm(
            'confirm content',
            () => {
              console.log('点了yes');
            },
            () => {
              console.log('点了no');
            },
          );
        }}
      >
        confirm trigger
      </button>
      <button
        onClick={() => {
          modal(<h2>modal hi</h2>);
        }}
      >
        modal trigger
      </button>
      <button onClick={openModal}>close in content</button>
    </div>
  );
}
