import { useState } from 'react'
import SaveTheDate from './Components/SaveTheDate/SaveTheDate'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <SaveTheDate/>
      </div>
    </>
  )
}

export default App
