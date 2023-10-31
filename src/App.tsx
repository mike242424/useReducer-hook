import { useState } from "react";
import UseReducerCounter from "./components/UseReducerCounter";
import Todo from "./components/TodoInput";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const decreaseCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
    <div>Without useReducer Hook</div>
      <button onClick={increaseCount}>Increase</button>
      <span>{count}</span>
      <button onClick={decreaseCount}>Decrease</button>
      <hr />
      <UseReducerCounter />
      <hr />
      <Todo />
    </>
  );
};

export default App;
