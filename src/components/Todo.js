import React, { Component } from 'react'
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import { connect } from 'react-redux';

import * as TodoActions from '../actions'

/* smart Component -- redux랑 연결 */
class Todo extends Component {
  render() {
    const { todos } = this.props;
    
    return (
      <div>
        <Header addTodo={this.props.handleAdd}/>
        <MainSection todos={todos} deleteTodo={this.props.handleDel} onModify={this.props.handleMod}/>
        <Footer counter={todos.length}/>
      </div>
    )
  }
}
// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  todos: state.todoReducer,
})

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => {
  return {
    // handles onTodoClick prop's call here
    handleAdd: text => {
      dispatch(TodoActions.addTodo(text))
    },
    handleDel: id => {
      dispatch(TodoActions.deleteTodo(id))
    },
    handleMod: (id, text) => {
      dispatch(TodoActions.modifyTodo(id,text))
    }
  }
}

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
