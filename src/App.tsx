import { useAtom } from 'jotai'
import './App.css'
import Counter from './components/Counter';
import DoubleCounter from './components/DoubleCounter';
import { counterAtom } from './atoms';


function App() {

  const [count] = useAtom(counterAtom);

  return (
    <>
      <h1>Jotai React State Management</h1>
      <h3>Counter Application :)</h3>
      <div className="card">
        <h3>{count}</h3>
        <Counter />
        <DoubleCounter />
      </div>
    </>
  )
}

export default App
