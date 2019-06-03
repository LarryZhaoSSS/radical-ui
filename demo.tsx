import * as React from "react";
import Hightlight, {defaultProps} from 'prism-react-renderer'
import {useState} from "react";

interface Props {
  code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false)
  const code = (
    <Hightlight {...defaultProps} code={props.code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
            {
              tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {
                    line.map((token, key) => (
                      <span {...getTokenProps({token, key})}></span>
                    ))
                  }
                </div>
              ))
            }
          </pre>
      )
      }
    </Hightlight>
  )
  return (
    <div>
      <div className='example'>
        {props.children}
      </div>
      <div>
        <button onClick={()=>{setCodeVisible(!codeVisible)}}>查看代码</button>
      </div>
      {
        codeVisible &&  code
      }

    </div>
  )
}
export default Demo