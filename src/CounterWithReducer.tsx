import React, { useReducer } from 'react';

interface StateType {
  count: number;
}
const initialState: StateType = { count: 0 };

interface InitialState {
  type: 'decrement' | 'increment' | 'reset'
}

const reducer = (state: StateType, action: InitialState): StateType | never => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  );
}

export default CounterWithReducer;
