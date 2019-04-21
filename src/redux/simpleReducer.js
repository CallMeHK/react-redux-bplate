export default (
  state = {
    result: "whaddup",
    count: 0,
    form:{
      name:"bob",
      age:21,
      home:"UT"
    }
  },
  action
) => {
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
      };
    case "UPDATE_FORM":
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload
        }
      };
    default:
      return state;
  }
};
