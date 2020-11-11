import { scopedClassMaker } from '../helpers/classnames';
import * as React from 'react';
import './tree.scss';
interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}
interface Props {
  sourceData: SourceDataItem[];
}
const scopedClass = scopedClassMaker('r-parts-tree');
const sc = scopedClass;
const renderItem = (item: SourceDataItem, level = 1) => {
  const classes = {
    ['level-' + level]: true,
    item: true,
  };
  return (
    <div key={item.value} className={sc(classes)}>
      <div className={sc('text')}>{item.text}</div>
      {item.children?.map((sub) => {
        return renderItem(sub, level + 1);
      })}
    </div>
  );
};
const Tree: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        {props.sourceData?.map((item) => {
          return renderItem(item);
        })}
      </div>
    </div>
  );
};

export { Tree };
