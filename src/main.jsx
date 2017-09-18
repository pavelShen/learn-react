import Content from './component/content'
import Clock from './component/Clock'
import Header from './component/Header'

const result = require('./css/test.css')
const React = require('react')
const ReactDOM = require('react-dom')

const activities = [
  {
    timestamp: new Date().getTime(),
    text: 'Ate lunch',
    user: {
      id: 1,
      name: 'Nate',
      avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg',
    },
    comments: [{ from: 'Ari', text: 'Me too!' }],
  },
]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVisible: false,
      inputText: '',
    }

    this.updateInputText = this.updateInputText.bind(this)
  }

  updateInputText(e) {
    const val = e.target.value

    this.setState({
      inputText: val,
    })

    console.log(this.state)
  }

  render() {
    return (
      <div className={result.notificationsFrame}>
        <input type="text" onChange={this.updateInputText} placeholder="inputtext" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))
