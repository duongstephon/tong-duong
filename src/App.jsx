import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import './App.css'
import SaveTheDate from './Components/SaveTheDate/SaveTheDate'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Navigation from './Components/Navigation/Navigation'
import ThankYou from './Components/ThankYou/ThankYou'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
    </>
  )
}

export default App