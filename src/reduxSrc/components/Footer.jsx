import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name
    }

    return (
      <a
        href=""
        onClick={(e) => {
          e.preventDefault()
          this.props.onFilterChange(filter)
        }}
      >
        {name}
      </a>
    )
  }

  render() {
    const { dispatch } = this.props
    return (
      <div>
        <p>
          Show:
          {' '}
          {this.renderFilter('SHOW_ALL', 'All')}
          {', '}
          {this.renderFilter('SHOW_COMPLETED', 'Completed')}
          {', '}
          {this.renderFilter('SHOW_ACTIVE', 'Active')}
          .
        </p>
        <button onClick={() => {
          dispatch(addTodo('abc'))
        }}>
          aa
        </button>
      </div>
      
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE',
  ]).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Footer)
