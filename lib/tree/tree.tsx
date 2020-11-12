import { scopedClassMaker } from '../helpers/classnames';
import * as React from 'react';
import './tree.scss';
export interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}
type Props = {
  sourceData: SourceDataItem[];

  onChange: (item: SourceDataItem, bool: boolean) => void;
} & (A | B);
type A = { selected: string[]; multiple: true };
type B = { selected: string; multiple: false };
const scopedClass = scopedClassMaker('r-parts-tree');
const sc = scopedClass;
const renderItem = (
  item: SourceDataItem,
  selected: string[],
  onChange: (item: SourceDataItem, bool: boolean) => void,
  level = 1
) => {
  const classes = {
    ['level-' + level]: true,
    item: true,
  };
  return (
    <div key={item.value} className={sc(classes)}>
      <div className={sc('text')}>
        <input
          type='checkbox'
          onChange={(e) => onChange(item, e.target.checked)}
          checked={selected.indexOf(item.value) >= 0}
        />
        {item.text}
      </div>
      {item.children?.map((sub) => {
        return renderItem(sub, selected, onChange, level + 1);
      })}
    </div>
  );
};
const Tree: React.FC<Props> = (props) => {
  if (props.multiple === true) {
    return (
      <div>
        <div>
          {props.sourceData?.map((item) => {
            return renderItem(item, props.selected, props.onChange);
          })}
        </div>
      </div>
    );
  } else {
    return <div>to do</div>;
  }
};

export { Tree };
