import React from 'react'
import ReactDOM from 'react-dom'
import Grid from 'icecreams'
import './css/index.css'
import Board from './component/Board'
import Test1 from './component/Test1'
import Test2 from './component/Test2'
import eventProxy from './util/eventProxy'

const { Row, Col } = Grid

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testData: {
        a: 1,
      },
    }
    this.changeTest2 = this.changeTest2.bind(this)
  }
  componentDidMount() {
    eventProxy.on('msg', (msg) => {
      console.log(msg)
      this.setState({
        msg,
      })
    })
  }
  changeTest2() {
    const state = this.state.testData
    state.x = 'y'
    this.setState({
      testData: state,
    })
  }
  render() {
    return (
      <div className="game">
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <Test1 test2="abc" />
        <Test2 abc={this.state.testData} />
        <button onClick={this.changeTest2}>change</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
)
