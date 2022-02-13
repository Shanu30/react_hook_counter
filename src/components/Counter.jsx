import { useState } from "react";
import style from "./Counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const handleClick = (value) => {
    setCounter(counter + value);
  };
  const handleMult = (value) => {
    setCounter(counter * value);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h1>{counter}</h1>
      <button className={style.button} onClick={() => handleClick(1)}>
        ADD
      </button>
      <button className={style.button} onClick={() => handleClick(-1)}>
        Reduce
      </button>
      <button className={style.button} onClick={() => handleMult(2)}>
        Double
      </button>
      <button className={style.button} onClick={() => handleClick(0)}>
        Reset
      </button>
    </div>
  );
}
