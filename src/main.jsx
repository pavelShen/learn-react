import Content from './component/content'
import Clock from './component/Clock'
import Header from './component/Header'

require('./css/test.css')
const React = require('react')
const ReactDOM = require('react-dom')

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: 'Nate',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Ari', text: 'Me too!' }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  },
]
class App extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          abc
          <Header title="123" />
          {/* <Content activities={activities} /> */}
        </div>
        <Clock />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))
