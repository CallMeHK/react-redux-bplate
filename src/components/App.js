import React, { Component } from "react";
import { connect } from "react-redux";
import ClassCount from "./ClassCount";

import { simpleAction, increaseCount } from "../redux/simpleAction";

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  increaseCount: () => dispatch(increaseCount())
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state
});

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  increaseCount = e => {
    this.props.increaseCount();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.simpleAction}>Test redux action</button>
        <div>
          <h3>App Count {this.props.simpleReducer.count}</h3>
          <button onClick={this.increaseCount}>increaseCount</button>
        </div>
        <ClassCount />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
