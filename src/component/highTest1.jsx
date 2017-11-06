import React from 'react'

export default function withHeader(WrapperComponent) {
  return class HOC extends React.Component {
    render() {
      const newProps = {
        test: 'hoc',
        test2: 'xyz',
      }
      return (
        <div>
          <div>高阶组件标题</div>
          <WrapperComponent {...newProps} {...this.props} />
        </div>
      )
    }
  }
}
