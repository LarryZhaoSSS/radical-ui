import * as React from 'react';
import { ChangeEventHandler } from 'react';
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
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.target.checked;
    if (treeProps.multiple) {
      if (checked) {
        treeProps.onChange([...treeProps.selected, item.value]);
      } else {
        treeProps.onChange(
          treeProps.selected.filter((v: any) => v !== item.value)
        );
      }
    } else {
      treeProps.onChange(item.value);
    }
  };
  const expand = () => {
    setExpanded(true);
  };
  const collapse = () => {
    setExpanded(false);
  };
  const [expanded, setExpanded] = React.useState<boolean>(true);
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
