import React from 'react'
import withHeader from './highTest1'

class Test1 extends React.Component {
  render() {
    return (
      <div>低阶组件文字</div>
    )
  }
}

export default withHeader(Test1)
