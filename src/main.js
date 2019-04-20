import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { StoreContext } from "redux-react-hook";

import configureStore from "./store";
import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Provider store={store}>
      <App />
    </Provider>
  </StoreContext.Provider>,
  document.getElementById("root")
);
