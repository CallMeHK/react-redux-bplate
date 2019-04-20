
export default (state = {
  result:"whaddup", count:0
}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        ...state,
        result: action.payload
      };
    case "INCREASE_COUNT":
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state;
  }
};
