import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { updateForm } from "../redux/simpleAction";

const useForm = () => {
  const mapState = useCallback(state => state.simpleReducer, []);
  const state = useMappedState(mapState);
  const dispatch = useDispatch();
  const change = useCallback(e => dispatch(updateForm(e)), []);

  return [state.form, change]
};

export default useForm;