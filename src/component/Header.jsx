import PropTypes from 'prop-types'

const React = require('react')

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVisible: false,
    }
  }

  // toggle visibility when run on the state
  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible,
    })
  }

  render() {
    // Classes to add to the <input /> element
    let searchInputClasses = ['searchInput']

    // Update the class array if the state is visible
    if (this.state.searchVisible) {
      searchInputClasses.push('active')
    }

    return (
      <div className="header">
        {/* <MenuButton /> */}

        <span className="title">
          {this.props.title}
        </span>

        <input
          type="text"
          className={searchInputClasses.join(' ')}
          placeholder="Search ..." />

        <div onClick={this.showSearch.bind(this)} className="fa fa-search searchIcon">hide</div>
      </div>
    )
  }
}

// Header.propTypes = {
//   title: PropTypes.number,
// }
Header.defaultProps = {
  name: 'Github activity',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
