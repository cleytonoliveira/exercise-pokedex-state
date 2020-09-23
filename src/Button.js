import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    const { className, children, disabled, onClick } = this.props;
    return (
      <button
        className={`button-text ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
}

export default Button;