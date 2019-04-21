import React, { Component } from "react";
import { connect } from "react-redux";
import ClassCount from "./ClassCount";
import FuncCount from "./FuncCount";
import CustomHookCount from "./CustomHookCount";
import Form from "./Form";

import { simpleAction, increaseCount, updateForm } from "../redux/simpleAction";

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  increaseCount: () => dispatch(increaseCount()),
  updateForm: e => dispatch(updateForm(e))
});

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
  onChange = (field, e) => {
    this.props.updateForm({ [field]: e });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.simpleAction}>Test redux action</button>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div>
            <h3>App Count {this.props.simpleReducer.count}</h3>
            <button onClick={this.increaseCount}>increaseCount</button>
            <Form form={this.props.simpleReducer.form} change={this.onChange} />
          </div>
          <ClassCount />
          <FuncCount />
          <CustomHookCount />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
