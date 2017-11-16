import React from 'react'
import eventProxy from '../util/eventProxy'

class Test2 extends React.PureComponent {
  triggerFn() {
    console.log('ff')
    eventProxy.trigger('msg', 'end')
  }
  render() {
    return (
      <div>
        <button onClick={this.triggerFn}>trigger</button>
      </div>
    )
  }
}

export default Test2
