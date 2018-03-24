import React, { Component } from "react";
import "./App.css";

import { increase, decrease } from "../ducks/counter";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>{this.props.count}</h4>
        <button onClick={() => this.props.increase(1)}>Add +1</button>
        <button onClick={() => this.props.increase(5)}>Add +5</button>
        <button onClick={() => this.props.decrease(1)}>Subtract -1</button>
        <button onClick={() => this.props.decrease(5)}>Subtract -5</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { increase, decrease })(App);
