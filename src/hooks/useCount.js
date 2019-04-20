import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { increaseCount } from "../redux/simpleAction";

const useCount = () => {
  const mapState = useCallback(state => state.simpleReducer, []);
  const state = useMappedState(mapState);
  const dispatch = useDispatch();
  const increase = useCallback(() => dispatch(increaseCount()), []);

  return [state.count, increase]
};

export default useCount;