import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave = text => {
    if(text.length !== 0) {
      console.log("------- 전달받은 텍스트값 ------- " + text);
      this.props.addTodo(text);
    }
  };

  render() {
    return (
     <header className="header">
       <h1>Todo List</h1>
       <TodoTextInput onSave={this.handleSave} placeholder="입력"/>
     </header>
    )
  }
}

function createWarning(funcName) {
  return () => console.warn(funcName + 'is not defined');
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
Header.defaultProps = {
  addTodo: () => createWarning('addTodo')
}