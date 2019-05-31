import classes, {scopedClassMaker} from '../classnames'
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
describe('scopeClassMaker',()=>{
  it('接受字符串和对象',()=>{
    const sc = scopedClassMaker('r-parts-layout')
    expect(sc('')).toEqual('r-parts-layout')
    expect(sc('x')).toEqual('r-parts-layout-x')
    expect(sc({y: true,z:false})).toEqual('r-parts-layout-y')
    expect(sc({y:true,z:true})).toEqual('r-parts-layout-y r-parts-layout-z')
    expect(sc({y:true,z:true},{extra:'red'})).toEqual('r-parts-layout-y r-parts-layout-z red')
  })
})