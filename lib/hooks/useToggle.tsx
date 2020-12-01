import { useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const expand = () => {
    setExpanded(true);
  };
  const collapse = () => {
    setExpanded(false);
  };
  const [expanded, setExpanded] = useState<boolean>(initialValue);
  return {
    open: expand,
    close: collapse,
    value: expanded,
  };
};
