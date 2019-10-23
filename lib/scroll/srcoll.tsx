import * as React from 'react';
import {HTMLAttributes, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import {UIEventHandler} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  const [barHeight,setBarHeight] = useState(0)
  const [barTop, setBarTop] = useState(0)
  const onScroll: UIEventHandler = (e) => {
    console.log(e.currentTarget.scrollTop);
    const { current } = containerRef
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop
    setBarTop(scrollTop * viewHeight / scrollHeight)
  };
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height; //可看见范围高度
    setBarHeight(viewHeight * viewHeight / scrollHeight)
  },[])
  return (
    <div className='r-parts-scroll' {...rest}>
      <div className="r-parts-scroll-inner"
           ref={containerRef}
           onScroll={onScroll}
      > {children}</div>
      <div className="r-parts-scroll-track">
        <div className="r-parts-scroll-bar" style={{height:barHeight, transform:`translateY(${barTop}px)`}}/>
      </div>
    </div>
  );
};
export default Scroll;