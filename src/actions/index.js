import * as types from './ActionTypes' // ActionTypes에 정의된 상수들을 types 안에 담아 불러옴

// 액션 생성자 (action creators)
export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text
  };
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id
  }
}

export function modifyTodo(id,text) {
  return {
    type: types.MODIFY_TODO,
    id,
    text
  }
}