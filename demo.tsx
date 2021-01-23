import * as React from 'react';
import Hightlight, { defaultProps } from 'prism-react-renderer';
import { useState } from 'react';
import Button from './lib/button';
import dracula from 'prism-react-renderer/themes/github';

interface Props {
  code: string;
}

const Demo: React.FunctionComponent<Props> = props => {
  const [codeVisible, setCodeVisible] = useState(true);
  const code = (
    <Hightlight
      {...defaultProps}
      code={props.code}
      theme={dracula}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })}></span>
              ))}
            </div>
          ))}
        </pre>
      )}
    </Hightlight>
  );
  return (
    <div>
      <div className="example">{props.children}</div>
      <div style={{ marginBottom: 15, marginTop: 15 }}>
        <Button
          onClick={() => {
            setCodeVisible(!codeVisible);
          }}
        >
          {codeVisible ? 'hide code' : 'show code'}
        </Button>
      </div>
      {codeVisible && code}
    </div>
  );
};
export default Demo;
