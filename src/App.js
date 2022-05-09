import React from "react";
import { useSelector } from "react-redux";
import CartButton from "./Components/CartButton";

function App() {
  const showCart = useSelector((state) => state.ui.visibility);
  return (
    <div className="App">
      <CartButton />
      <h1>{showCart ? "hello" : ""}</h1>
    </div>
  );
}

export default App;
