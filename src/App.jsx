import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>count : {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
