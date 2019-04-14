import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../Icon'
import {mount} from 'enzyme'

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name="alipay"></Icon>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="alipay" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})