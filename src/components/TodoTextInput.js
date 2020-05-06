import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* dumb component */
export default class TodoTextInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    text: this.props.text || ""
  };
  
  handleSubmit = e => {
    e.preventDefault(); // 페이지 리로딩 방지 (리로드 시 state 값 초기화 됨)
    const text = this.state.text;
    this.props.onSave(text); // 상태값을 onSave를 통하여 부모에게 전달

    // 값 add 후 초기화
    this.setState({
      text: '',
    })
  }

  // 키보드 입력 시마다 콘솔에 찍힘
  handleChange = e => {
    this.setState({text:e.target.value}); // 업데이트 할 상태의 부분을 포함하는 객체를 setState 인자로 전달
    console.log(this.state.text);// e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값 읽어오기 (키보드 누를 때마다 값을 업데이트함)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="입력"/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

function createWarning(funcName) {
  return () => console.warn(funcName + 'is not defined');
}
// prop값을 검증하기 위해 PropTypes를 이용하여 값을 지정
TodoTextInput.propTypes  = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
};

TodoTextInput.defaultProps = {
  onSubmit: () => createWarning('handleSubmit')
};