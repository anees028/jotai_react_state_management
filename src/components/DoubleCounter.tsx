import { useAtom } from "jotai";
import {doubledCounterAtom} from '../atoms'

function DoubleCounter() {
  const [doubleCounter] = useAtom(doubledCounterAtom)
  return (
    <>
      {doubleCounter}
    </>
  );
}

export default DoubleCounter;
