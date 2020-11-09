import * as React from 'react';
interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}
interface Props {
  sourceData: SourceDataItem[];
}
const Tree: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        {props.sourceData.map((item) => {
          return (
            <div key={item.value}>
              {item.text}
              {item.children?.map((item2) => {
                return <div key={item2.value}>{item2.text}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Tree };
