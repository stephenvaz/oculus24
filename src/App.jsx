import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-cyan-400 text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
