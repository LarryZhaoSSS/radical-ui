import * as React from 'react';
import {HTMLAttributes, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import {UIEventHandler, MouseEventHandler} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const onScroll: UIEventHandler = (e) => {
    console.log(e.currentTarget.scrollTop);
    const {current} = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    _setBarTop(scrollTop * viewHeight / scrollHeight);
  };
  const setBarTop = (number: number) => {
    if (number < 0) {
      return;
    }
    const {current} = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
    if (number > maxBarTop) {
      return;
    }
    _setBarTop(number);

  };
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height; //可看见范围高度
    setBarHeight(viewHeight * viewHeight / scrollHeight);
  }, []);
  const firstYRef = useRef(0);
  const draggingRef = useRef(false);
  const firstBarTopRef = useRef(0);
  const onMouseDownBar: MouseEventHandler = (e) => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
    firstBarTopRef.current = barTop;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const scrollHeight = containerRef.current!.scrollHeight
      const viewHeight = containerRef.current!.getBoundingClientRect().height
      const delta = e.clientY - firstYRef.current;
      const newBarTop = firstBarTopRef.current + delta
      setBarTop(firstBarTopRef.current + delta);
      containerRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight
    }
  };
  const onMouseUpBar = () => {
    draggingRef.current = false;
  };
  const onSelect = (e:Event) => {
    if(draggingRef.current) {
      e.preventDefault()
    }
  }
  useEffect(() => {
    document.addEventListener('mouseup', onMouseUpBar);
    document.addEventListener('mousemove', onMouseMoveBar);
    document.addEventListener('selectstart',onSelect)
    return ()=>{
      document.removeEventListener('mouseup', onMouseUpBar);
      document.removeEventListener('mousemove', onMouseMoveBar);
      document.removeEventListener('selectstart',onSelect)

    }
  }, []);
  return (
    <div className='r-parts-scroll' {...rest} >
      <div className="r-parts-scroll-inner"
           ref={containerRef}
           onScroll={onScroll}
      > {children}</div>
      <div className="r-parts-scroll-track">
        <div className="r-parts-scroll-bar"
             style={{height: barHeight, transform: `translateY(${barTop}px)`}}
             onMouseDown={onMouseDownBar}

        />
      </div>
    </div>
  );
};
export default Scroll;