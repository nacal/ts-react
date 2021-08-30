import React, { useEffect, useRef, useState } from 'react';

// const Counter: React.FC<{}> = () => {
//   const [value, setValue] = useState<number>(0);

//   const increment = () => {
//     setValue((prevState) => prevState + 1);
//   }

//   const decrement = () => {
//     setValue((prevState) => prevState - 1);
//   }

//   return (
//     <div>
//       <div>value: {value}</div>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//     </div>
//   );
// }
const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  }

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  }

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current++;
  });

  return (
    <div>
      <p>value: {value}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <p>This component was re-rendered {renderTimes.current} times.</p>
    </div>
  );
}

export default Counter;
