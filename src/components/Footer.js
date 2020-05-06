import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  render(){
    const { counter } = this.props;
    return(
      <div>
        counter : {counter}
      </div>
    )
  }
}

Footer.propTypes = {
  counter: PropTypes.number.isRequired
}
Footer.defaultProps = {
  counter:0
}