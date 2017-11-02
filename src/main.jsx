import React from 'react'
import ReactDOM from 'react-dom'
import Grid from 'icecreams'
import './css/index.css'
import Board from './component/Board'

const { Row, Col } = Grid

class Game extends React.Component {
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
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
)
