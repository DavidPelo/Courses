import React, { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>useState error example</h2>
      <button type='button' className='btn' onClick={clickHandler}>Increment Count</button>
      {count}
    </div>
  );
};

export default ErrorExample;
