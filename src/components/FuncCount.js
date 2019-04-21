import React from "react";
import { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { increaseCount, updateForm } from "../redux/simpleAction";
import Form from "./Form";

const FuncCount = () => {
  const mapState = useCallback(state => state.simpleReducer, []);
  const state = useMappedState(mapState);
  const dispatch = useDispatch();
  const increase = useCallback(() => dispatch(increaseCount()), []);
  const change = useCallback(e => dispatch(updateForm(e)), []);
  const onChange = (field, e) => {
    change({ [field]: e });
  };
  return (
    <div>
      <h3>FuncCount: {state.count}</h3>
      <button onClick={increase}>increaseCount</button>
      <Form form={state.form} change={onChange} />
    </div>
  );
};

export default FuncCount;
