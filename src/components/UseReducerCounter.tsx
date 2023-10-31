import { useReducer } from "react";

interface State {
  count: number;
}

interface Action {
  type: "increase" | "decrease";
}

// informs TypeScript that the values of INCREASE and DECREASE should be treated as string literals, not general strings
const Actions = {
  INCREASE: "increase" as const,
  DECREASE: "decrease" as const,
};

const initialState = { count: 0 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.INCREASE:
      return { count: state.count + 1 };
    case Actions.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerCounter = () => {
  // useReducer fxn takes 2 args: reducer fxn and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseCount = () => {
    dispatch({ type: Actions.INCREASE });
  };

  const decreaseCount = () => {
    dispatch({ type: Actions.DECREASE });
  };
  return (
    <>
      <div>With useReducer Hook</div>
      <button onClick={increaseCount}>Increase</button>
      <span>{state.count}</span>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  );
};

export default UseReducerCounter;
