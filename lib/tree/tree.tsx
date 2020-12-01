import { scopedClassMaker } from '../helpers/classnames';
import * as React from 'react';
import './tree.scss';
import { TreeItem } from './tree-item';
export interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}
export type TreeProps = {
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
console.log(sc);
const Tree: React.FC<TreeProps> = (props) => {
  const onItemChange = (values: string[] | string) => {
    console.log('---最终值---');
    console.log(values);
    if (props.multiple) {
      props.onChange(Array.from(new Set(values)) as string[]);
    } else {
      props.onChange(values as string);
    }
  };
  return (
    <div>
      <div>
        {props.sourceData?.map((item) => {
          return (
            <TreeItem
              key={item.value}
              treeProps={props}
              item={item}
              level={1}
              onItemChange={onItemChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Tree };
