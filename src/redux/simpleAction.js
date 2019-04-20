const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};

const increaseCount = () => dispatch => {
  dispatch({
    type:"INCREASE_COUNT",
  })
}

export { simpleAction, increaseCount }