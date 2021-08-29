import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div>
      {message}
      <Counter name='Counter' />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, world.',
}

export default App;
