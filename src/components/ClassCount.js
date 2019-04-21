import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./Form"

import { increaseCount, updateForm } from "../redux/simpleAction";

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  increaseCount: () => dispatch(increaseCount()),
  updateForm: e => dispatch(updateForm(e))
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state.simpleReducer
});

class ClassCount extends Component {

  increaseCount = e => {
    this.props.increaseCount()
  }

  onChange = (field, e) => {
    this.props.updateForm({ [field]: e });
  };

  render() {
    return (
      <div>
        <h3>ClassCount: {this.props.count}</h3>
        <button onClick={this.increaseCount}>increaseCount</button>
        <Form form={this.props.form} change={this.onChange} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassCount);
