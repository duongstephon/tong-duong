import { useState } from 'react'
import Home from './Components/Home/Home'
import './App.css'
import SaveTheDate from './Components/SaveTheDate/SaveTheDate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         {/* <Home/> */}
         <SaveTheDate/>
      </div>
    </>
  )
}

export default App
