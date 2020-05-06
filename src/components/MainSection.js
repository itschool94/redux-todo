import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class MainSection extends Component {
  render() {
    const { todos, deleteTodo, onModify } = this.props;

    return (
      <section>
        <ul className="todo-list">
          {todos.map(row => (
            <TodoItem key={row.id} row={row} deleteTodo={deleteTodo} modifyTodo={onModify}/>
          ))}
        </ul>
      </section>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  onModify: PropTypes.func
}
MainSection.defaultProps = {
  todos: []
}