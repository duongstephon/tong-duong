import { useState } from 'react'
import SaveTheDate from './Components/SaveTheDate/SaveTheDate'
import './App.css'
import TestPage from './TestPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <SaveTheDate/> */}
        <TestPage />
      </div>
    </>
  )
}

export default App
