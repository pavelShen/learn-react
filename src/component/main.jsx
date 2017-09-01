const React = require('react');
const ReactDOM = require('react-dom');

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.querySelector('#wrapper')
// );

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1, name: 'Nate',
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
              <Header title="Timeline" />
              <Content activities={activities} />
            </div>
          </div>
        )
      }
    }

    class Header extends React.Component {
      render() {
        return (
          <div className="header">
            <div className="fa fa-more"></div>

            <span className="title">{this.props.title}</span>

            <input
              type="text"
              className="searchInput"
              placeholder="Search ..." />

            <div className="fa fa-search searchIcon"></div>
          </div>
        )
      }
    }

    class Content extends React.Component {
      render() {
        const {activities} = this.props; 
        return (
          <div className="content">
            <div className="line"></div>

            {activities.map((activity) => {
              return (
                <div className="item">
                  <div className="avatar">
                    <img
                      alt={activity.text}
                      src={activity.user.avatar} />
                    {activity.user.name}
                  </div>
    
                  <span className="time">
                    {activity.timestamp}
                  </span>
                  <p>{activity.text}</p>
                  <div className="commentCount">
                    {activity.comments.length}
                  </div>
                </div>
              );
            })}
    
          </div>
        )
      }
    }

    var mount = document.querySelector('#app');
    ReactDOM.render(<App />, mount);