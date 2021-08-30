import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

const App = ({ message }: AppProps) => {
  return (
    <div>
      {message}
      <Counter />
    </div>
  );
};

export default App;
