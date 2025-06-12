import { useAtom } from "jotai";
import { counterAtom } from "../App";

function Counter() {
  const [_, setCount] = useAtom(counterAtom);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
}

export default Counter;
