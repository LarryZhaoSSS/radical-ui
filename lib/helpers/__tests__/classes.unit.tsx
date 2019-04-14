import classes from '../classnames'
describe('classes', ()=>{
  it('接受1个className',()=>{
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it('接受2个className',()=>{
    const result = classes('a','b')
    expect(result).toEqual('a b')
  })
  it('接受1个undefined',()=>{
    const result = classes('a',undefined)
    expect(result).toEqual('a')
  })
  it('没有任何一个参数',()=>{
    const result = classes()
    expect(result).toEqual('')
  })
})