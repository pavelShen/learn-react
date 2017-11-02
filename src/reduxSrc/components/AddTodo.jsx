import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
  handleClick() {
    const node = this.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.input = input }}
        />
        <button
          onClick={(e) => { this.handleClick(e) }}
        >
          Add
        </button>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
}
