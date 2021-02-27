import * as React from 'react'
import { ContentCard, ContentWrapper } from '../helpers/CommonElements';
import  Select  from './index';
const {Option} = Select
export const SelectExample = ()=>{
  return <ContentWrapper>
    selectExample

    <ContentCard>
    <Select
    name="viking-select"
    onChange={(value)=>{}}
    onVisibleChange={(visible)=>{}}
    placeholder="请选择"
  >
    <Option value="nihao" />
    <Option value="nihao2" />
    <Option value="nihao3" />
    <Option
      disabled
      value="disabled"
    />
    <Option value="nihao5" />
  </Select>
    </ContentCard>
  </ContentWrapper>
}