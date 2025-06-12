import { atom, useAtom } from 'jotai'
import './App.css'
import Counter from './components/Counter';

export const counterAtom = atom(0)

function App() {

  const [count] = useAtom(counterAtom);

  return (
    <>
      <h1>Jotai React State Management</h1>
      <h3>Counter Application :)</h3>
      <div className="card">
        <h3>{count}</h3>
        <Counter />
      </div>
    </>
  )
}

export default App
