import * as React from 'react'
import Icon from "./Icon";
const fn:React.MouseEventHandler = (e) =>{
  console.log(e.target)
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Icon name="alipay" onClick={fn} onMouseLeave={()=>{console.log('leave')}}/>
      </div>
    )
  }
}

export default App