import React, { Component } from 'react';


export default class DisplayComponent extends Component {
    render() {
      return (
        <div className="wrap-me">{this.props.sayWhat}</div>
      );
    }
  }