import { FC } from 'react';
import { Menu, MenuProps } from './Menu';
import { SubMenu, SubMenuProps } from './SubMenu';
import { MenuItem, MenuItemProps } from './MenuItem';
import './menu.scss';
export type IMenuComponent = FC<MenuProps> & {
  MenuItem: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};

const TransMenu = Menu as IMenuComponent;
TransMenu.MenuItem = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
