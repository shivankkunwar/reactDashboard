import { useState } from 'react'

import './App.css'
import  Login from './Login/Login'
import Dashboard from './DashBoard/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/> */}

      <Dashboard/>
    </>
  )
}

export default App
