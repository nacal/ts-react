import React from 'react';
import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
}

const App = ({ message }: AppProps) => {
  return (
    <div>
      {message}
      <Counter />
      <CounterWithReducer />
    </div>
  );
};

export default App;
