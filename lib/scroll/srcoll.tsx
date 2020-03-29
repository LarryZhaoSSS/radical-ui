import * as React from 'react';
import {HTMLAttributes, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import {UIEventHandler, MouseEventHandler, TouchEventHandler} from 'react';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {
  onPull?: () => void
}

// const isTouchDevice: boolean = 'ontouchstart' in document.documentElement;
const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const [barVisible, setBarVisible] = useState(false);
  const timerIdRef = useRef<number | null>(null);
  const onScroll: UIEventHandler = (e) => {
    setBarVisible(true);
    const {current} = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    _setBarTop(scrollTop * viewHeight / scrollHeight);
    if (timerIdRef.current !== null) {
      window.clearTimeout(timerIdRef.current!);
    }
    timerIdRef.current = window.setTimeout(() => {
      setBarVisible(false);
    }, 500);
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
      const scrollHeight = containerRef.current!.scrollHeight;
      const viewHeight = containerRef.current!.getBoundingClientRect().height;
      const delta = e.clientY - firstYRef.current;
      const newBarTop = firstBarTopRef.current + delta;
      setBarTop(firstBarTopRef.current + delta);
      containerRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
    }
  };
  const onMouseUpBar = () => {
    draggingRef.current = false;
  };
  const onSelect = (e: Event) => {
    if (draggingRef.current) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseup', onMouseUpBar);
    document.addEventListener('mousemove', onMouseMoveBar);
    document.addEventListener('selectstart', onSelect);
    return () => {
      document.removeEventListener('mouseup', onMouseUpBar);
      document.removeEventListener('mousemove', onMouseMoveBar);
      document.removeEventListener('selectstart', onSelect);

    };
  }, []);
  const [translateY, _setTranslateY] = useState(0);
  const setTranslateY = (y: number) => {
    if (y < 0) {
      y = 0;
    }
    _setTranslateY(y);
  };
  const lastYRef = useRef(0);
  const onTouchStart: TouchEventHandler = (e) => {
    const scrollTop = containerRef.current!.scrollTop;
    if (scrollTop !== 0) {
      return;
    }
    pulling.current = true;
    lastYRef.current = e.touches[0].clientY;
    moveCount.current = 0;
  };
  const moveCount = useRef(0);
  const pulling = useRef(false);
  const onTouchMove: TouchEventHandler = (e) => {
    const deltaY = e.touches[0].clientY - lastYRef.current;
    moveCount.current += 1;
    console.log('touch move' + deltaY);

    if (moveCount.current === 1 && deltaY < 0) {
      pulling.current = false;
      return;
    }
    if (!pulling.current) {
      return;
    }
    if (deltaY > 0) {
      console.log('up up up up');
      setTranslateY(translateY + deltaY);
    } else {
      console.log('down down');
      setTranslateY(translateY + deltaY);
    }
    setTranslateY(translateY + deltaY);
    lastYRef.current = e.touches[0].clientY;
  };
  const onTouchEnd: TouchEventHandler = e => {
    if (pulling.current) {
      setTranslateY(0);
      props.onPull && props.onPull();
      pulling.current = false;
    }
  };
  return (
    <div className='r-parts-scroll' {...rest} >
      <div className="r-parts-scroll-inner"
           style={{
             right: scrollbarWidth(),
             transform: `translateY(${translateY}px)`
           }}
           ref={containerRef}
           onScroll={onScroll}
           onTouchMove={onTouchMove}
           onTouchStart={onTouchStart}
           onTouchEnd={onTouchEnd}
      > {children}</div>
      {
        barVisible && (<div className="r-parts-scroll-track">
          <div className="r-parts-scroll-bar"
               style={{height: barHeight, transform: `translateY(${barTop}px)`}}
               onMouseDown={onMouseDownBar}

          />
        </div>)
      }
      <div className="r-parts-scroll-pulling"
           style={{height: translateY}}
      >
        {
          translateY === 150 ?
            <span className="r-parts-pulling-text">'释放更新'</span> :
            <span className="r-parts-pulling-icon">'V'</span>
        }
      </div>
    </div>
  );
};
export default Scroll;