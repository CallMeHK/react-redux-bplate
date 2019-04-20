import React from "react";
import { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { increaseCount } from "../redux/simpleAction";


const FuncCount = () => {
  const mapState = useCallback(state => state.simpleReducer, []);
  const state = useMappedState(mapState)
  const dispatch = useDispatch();
  const increase = useCallback( () => dispatch(increaseCount()),[])

  return (
    <div>
      <h3>FuncCount: {state.count}</h3>
      <button onClick={increase}>increaseCount</button>
    </div>
  );
};

export default FuncCount;
