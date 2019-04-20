import React, { Component } from "react";
import { connect } from "react-redux";

import { increaseCount } from "../redux/simpleAction";

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  increaseCount: () => dispatch(increaseCount())
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

  render() {
    return (
      <div>
        <h3>ClassCount: {this.props.count}</h3>
        <button onClick={this.increaseCount}>increaseCount</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassCount);
