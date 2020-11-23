import { scopedClassMaker } from '../helpers/classnames';
import * as React from 'react';
import './tree.scss';
import { ChangeEventHandler, useState } from 'react';
export interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}
type Props = {
  sourceData: SourceDataItem[];
} & (A | B);
type A = {
  selected: string[];
  multiple: true;
  onChange: (newSelected: string[]) => void;
};
type B = {
  selected: string;
  multiple?: false;
  onChange: (newSelected: string) => void;
};
const scopedClass = scopedClassMaker('r-parts-tree');
const sc = scopedClass;

const Tree: React.FC<Props> = (props) => {
  const renderItem = (item: SourceDataItem, level = 1) => {
    const classes = {
      ['level-' + level]: true,
      item: true,
    };
    const checked = props.multiple
      ? props.selected.indexOf(item.value) >= 0
      : props.selected === item.value;
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const checked = e.target.checked;
      if (props.multiple) {
        if (checked) {
          props.onChange([...props.selected, item.value]);
        } else {
          props.onChange(props.selected.filter((v: any) => v !== item.value));
        }
      } else {
        props.onChange(item.value);
      }
    };
    const expand = () => {
      setExpanded(true);
    };
    const collapse = () => {
      setExpanded(false);
    };
    const [expanded, setExpanded] = useState<boolean>(true);
    console.log(expanded);
    return (
      <div key={item.value} className={sc(classes)}>
        <div className={sc('text')}>
          <input type='checkbox' onChange={onChange} checked={checked} />
          {item.text}
          {item.children && (
            <span onSelect={(e) => e.preventDefault()}>
              {expanded ? (
                <span onClick={collapse}>-</span>
              ) : (
                <span onClick={expand}>+</span>
              )}
            </span>
          )}
        </div>
        <div className={sc({ children: true, collapsed: !expanded })}>
          {item.children?.map((sub) => {
            return renderItem(sub, level + 1);
          })}
        </div>
      </div>
    );
  };
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
