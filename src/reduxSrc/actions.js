const actions = {
  ADD_TODO: 'ADD_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  VisibilityFilters: {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
  },
  addTodo(text) {
    return { type: actions.ADD_TODO, text }
  },
  completeTodo(index) {
    return { type: actions.COMPLETE_TODO, index }
  },
  setVisibilityFilter(filter) {
    return { type: actions.SET_VISIBILITY_FILTER, filter }
  },
}

module.exports = actions
