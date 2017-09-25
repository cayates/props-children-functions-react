import React, { Component } from 'react';

import ChildComponent from './ChildComponent';
import DisplayComponent from './DisplayComponent';

export default class ParentComponent extends Component {
    constructor(props){
      super(props);
  
      //we are really in a *bind* here.... :)
      //fix it...
  
      //state lives here
      this.state = {
        whatToSay: "",
        whatWasSaid: "",
      }
    }
    handleInput = (e) => {
      e.preventDefault();
      //set the state on input change
      this.setState({whatToSay: e.target.value});
    }
    handleSubmit = (e) => {
      e.preventDefault();
      //check console to see if firing
      console.log("fired");
      //set the state for props and for value (prevents output from appearing when typing)
      this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
      //clear our input by resetting state
      this.setState({whatToSay: ""});
  
    }
    render() {
      return (
        <div>
          <div className="d-flex justify-content-center">
            <textarea className="form-control col-3 m-4" rows="5" cols="50" onChange={this.handleInput} value={this.state.whatToSay}type="text" placeholder="Input text here and watch it appear below!" />
          </div>
          <div>
            <ChildComponent onClick={this.handleSubmit}/>
            <h1>
            <DisplayComponent sayWhat={this.state.whatWasSaid} />
            </h1>
          </div>
        </div>
      );
    }
  }