import React, { FC } from 'react'
import './progress.scss'
export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?:  'main'
  | 'danger'
  | 'normal'
  | 'Secondary'
  | 'Success'
  | 'info'
  | 'warning'
  | 'help';
  format?:(percent:number)=>string
}

const ProgressBar: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    styles,
    theme,
    format
  } = props
  const generateProgressText = (percent:number)=>{
    let infoText = `${percent}%`
    if(format) {
      infoText = format(percent)
    }
    return <span className="inner-text">{infoText}</span>
  }
  return (
    <div className="r-parts-progress-bar" style={styles}>
      <div className="r-parts-progress-bar-outer" style={{ height: `${strokeHeight}px`}}>
        <div
          className={`r-parts-progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && generateProgressText(percent)}
        </div>
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  strokeHeight: 16,
  showText: true,
  theme: "main",
}

export {ProgressBar}