import { useUpdate } from '../hooks/useUpdate';
import * as React from 'react';
import { ChangeEventHandler, useRef } from 'react';
import { scopedClassMaker } from '../helpers/classnames';

import { SourceDataItem, TreeProps } from './tree';
import { useToggle } from '../hooks/useToggle';
const scopedClass = scopedClassMaker('r-parts-tree');
const sc = scopedClass;
interface Props {
  item: SourceDataItem;
  level: number;
  treeProps: TreeProps;
  onItemChange: (values: string[]) => void;
}
export const TreeItem: React.FC<Props> = (props) => {
  const { item, level, treeProps } = props;
  const classes = {
    ['level-' + level]: true,
    item: true,
  };
  const checked = treeProps.multiple
    ? treeProps.selected.indexOf(item.value) >= 0
    : treeProps.selected === item.value;
  interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}
  function flatten(array?: RecursiveArray<string>): string[] {
    if (!array) {
      return [];
    }
    return array.reduce<string[]>((result, current) => {
      if (typeof current === 'string') {
        return result.concat(current);
      } else {
        return result.concat(flatten(current));
      }
    }, []);
  }
  function collectChildrenValues(item: SourceDataItem): string[] {
    return flatten(
      item.children?.map((i) => [i.value, collectChildrenValues(i)])
    );
  }
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.target.checked;
    const childrenValues = collectChildrenValues(item);
    console.log(childrenValues);
    if (treeProps.multiple) {
      if (checked) {
        props.onItemChange([
          ...treeProps.selected,
          item.value,
          ...childrenValues,
        ]);
      } else {
        props.onItemChange(
          treeProps.selected.filter(
            (v: any) => v !== item.value && childrenValues.indexOf(v) === -1
          )
        );
      }
    } else {
      if (e.target.checked) {
        treeProps.onChange(item.value);
      } else {
        treeProps.onChange('');
      }
    }
  };
  // const expand = () => {
  //   setExpanded(true);
  // };
  // const collapse = () => {
  //   setExpanded(false);
  // };
  // const [expanded, setExpanded] = React.useState<boolean>(true);
  const { open: expand, close: collapse, value: expanded } = useToggle(false);
  const divRef = useRef<HTMLDivElement>(null);
  useUpdate(expanded, () => {
    console.log('2 time');
    if (!divRef.current) {
      return;
    }
    if (expanded) {
      console.log('打开');
      divRef.current.style.position = 'absolute';
      divRef.current.style.opacity = '0';
      divRef.current.style.height = 'auto';
      divRef.current.style.position = '';
      divRef.current.style.opacity = '';
      const { height } = divRef.current.getBoundingClientRect();
      divRef.current.style.height = '0px';
      divRef.current.getBoundingClientRect();
      divRef.current.style.height = height + 'px';
      const afterExpand = () => {
        if (!divRef.current) {
          return;
        }
        divRef.current.style.height = '';
        divRef.current.classList.add('r-parts-tree-children-present');
        divRef.current.removeEventListener('transitionend', afterExpand);
      };
      divRef.current.addEventListener('transitionend', afterExpand);
    } else {
      console.log('关闭');
      const { height } = divRef.current.getBoundingClientRect();
      console.log(height);
      divRef.current.style.height = height + 'px';
      divRef.current.getBoundingClientRect();
      divRef.current.style.height = '0px';
      const afterCollapse = () => {
        if (!divRef.current) {
          return;
        }
        divRef.current.style.height = '';
        divRef.current.classList.add('r-parts-tree-children-gone');
        divRef.current.removeEventListener('transitionend', afterCollapse);
      };
      divRef.current.addEventListener('transitionend', afterCollapse);
    }
  });
  function intersect<T>(array1: T[], array2: T[]): T[] {
    const result: T[] = [];
    for (let i = 0; i < array1.length; i++) {
      if (array2.indexOf(array1[i]) >= 1) {
        result.push(array1[i]);
      }
    }
    return result;
  }
  const inputRef = useRef<HTMLInputElement>(null);

  const onItemChange = (values: string[]) => {
    // 子代被全部选中
    const childrenValues = collectChildrenValues(item);
    const common = intersect(values, childrenValues);
    console.log('---values---');
    console.log(values);
    console.log(childrenValues);
    console.log(common);
    if (common.length > 0) {
      props.onItemChange(Array.from(new Set(values.concat(item.value))));
      if (common.length === childrenValues.length) {
        console.log('全选');
        inputRef.current!.indeterminate = false;
      } else {
        console.log('半悬');
        inputRef.current!.indeterminate = false;
      }
    } else {
      console.log('全不选');
      props.onItemChange(values.filter((v) => v !== item.value));
      inputRef.current!.indeterminate = false;
    }
  };
  return (
    <div key={item.value} className={sc(classes)}>
      <div className={sc('text')}>
        <input
          ref={inputRef}
          type='checkbox'
          onChange={onChange}
          checked={checked}
        />
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
      <div
        ref={divRef}
        className={sc({ children: true, collapsed: !expanded })}
      >
        {item.children?.map((sub) => {
          // return renderItem(sub, level + 1);
          return (
            <TreeItem
              key={sub.value}
              item={sub}
              level={level + 1}
              treeProps={treeProps}
              onItemChange={onItemChange}
            />
          );
        })}
      </div>
    </div>
  );
};
