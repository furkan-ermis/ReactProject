import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const arttir = () => {
    count != 10 ? setCount(count + 1) : setCount(count);
  };
  const azalt = () => {
    count > 0 ? setCount(count - 1) : setCount(count);
  };
  return (
    <div>
      <p>Counter ={count}</p>
      <button onClick={arttir}>Arttır</button>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
}
export default Counter;
