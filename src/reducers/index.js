import { combineReducers } from 'redux';
import todoReducer from './todos';
/*

  [Reducer] 변화를 일으키는 순수한 함수 (비동기 작업x, 인수 변경x, 동일한 인수 = 동일한 결과)
  이전 상태와 액션을 받아서 다음 상태를 반환한다. (previusState, action => newState)
  But, 이전 상태를 변경하는게 아님, 그저 새로운 상태를 반환하는 것 = 기존 상태를 복사하고 Action에 따라 변화를 준 다음에 반환

*/

// reducer 합치기
const rootReducer = combineReducers({
  todoReducer
})

// reducer 내보내기
export default rootReducer;