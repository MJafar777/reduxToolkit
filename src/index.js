import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
// import { createStore } from "redux";
// import reducer from "./redux/reducer";
// import { inc } from "./redux/actions";

// const store = createStore(reducer);

// const state = store.dispatch(inc());
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
