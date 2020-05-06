import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {

  handleModify = (id, text) => {
    console.log(id);
    console.log(text);
    this.props.onModify(id,text);
  }

  render() {
    const { row, deleteTodo } = this.props;
    return (
      <li>
        <strong>{row.id} : </strong>
        <span>{row.text}</span>
        <button type="button" onClick={text => this.handleModify(row.id,row.text)}>수정</button>
        <button type="button" onClick={() => deleteTodo(row.id)}>삭제</button>
        <form>
          <input type="text"></input>
        </form>
      </li>
    )
  }
}

function createWarning(funcName) {
  return () => console.warn(funcName + 'is not defined');
}
TodoItem.propTypes = {
  row: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  modifyTodo: PropTypes.func.isRequired
}
TodoItem.defaultProps = {
  deleteTodo: () => createWarning('deleteTodo'),
  modifyTodo: () => createWarning('modifyTodo')
};