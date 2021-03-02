import { FC } from 'react'
import Tabs, { TabsProps } from './Tabs'
import TabItem, { TabItemProps } from './TabItem'
import './tab.scss'
export type ITabsComponent = FC<TabsProps> & {
  TabItem: FC<TabItemProps>
}
const TransTabs = Tabs as ITabsComponent
TransTabs.TabItem = TabItem

export default TransTabs