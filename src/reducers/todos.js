/*
  Sub Reducer
*/
import * as types from '../actions/ActionTypes';

// 초기 상태를 정의 (최초 변화를 일으키기 전, 지니고있어야 할 초기 상태를 정의해야함)
const initialState = [
  {
    id:1,
    text: "Use Redux1"
  },
  {
    id:2,
    text: "Use Redux2"
  }
]

// 리듀서 함수 정의
const todoReducer = (state = initialState, action ) => {
  switch (action.type) {
    case types.ADD_TODO:
      reducerType("ADD_TODO");
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1,
          text: action.text
        }
      ];

    case types.DELETE_TODO:
      reducerType("DELETE_TODO");
      return state.filter(todo => todo.id !== action.id);

    case types.MODIFY_TODO:
      reducerType("MODIFY_TODO");
      return state.map(
        todo => todo.id === action.id ? { ...todo, text:action.text} : todo
      );

    default:
      return state; // 기존 상태 그대로를 반환
  }
}
export default todoReducer;

function reducerType (typeName) {
  console.log("reducer Type : " + typeName);
}