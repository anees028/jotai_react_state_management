import { atom, useAtom } from 'jotai'
import './App.css'

export const counterAtom = atom(0)

function App() {

  const [count, setCount] = useAtom(counterAtom);

  return (
    <>
      <h1>Jotai React State Management</h1>
      <h3>Counter Application :)</h3>
      <div className="card">
        <h3>{count}</h3>
        <button onClick={()=> setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={()=> setCount((prev) => prev - 1)}>Decrement</button>
      </div>
    </>
  )
}

export default App
