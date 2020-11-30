import { useUpdate } from '../hooks/useUpdate';
import * as React from 'react';
import { ChangeEventHandler, useRef } from 'react';
import { scopedClassMaker } from '../helpers/classnames';

import { SourceDataItem, TreeProps } from './tree';
const scopedClass = scopedClassMaker('r-parts-tree');
const sc = scopedClass;
interface Props {
  item: SourceDataItem;
  level: number;
  treeProps: TreeProps;
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
        treeProps.onChange([
          ...treeProps.selected,
          item.value,
          ...childrenValues,
        ]);
      } else {
        treeProps.onChange(
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
  const expand = () => {
    setExpanded(true);
  };
  const collapse = () => {
    setExpanded(false);
  };
  const [expanded, setExpanded] = React.useState<boolean>(true);
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
            />
          );
        })}
      </div>
    </div>
  );
};
