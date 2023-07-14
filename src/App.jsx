import { useState } from 'react'

import './App.css'
import  Login from './Login/Login'
import Dashboard from './DashBoard/Dashboard'

function App() {
  const [count, setCount] = useState(0);
  const [auth, setAuth]=useState(false);

  return (
    <>
     {auth ? <Dashboard /> : <Login setAuth={setAuth} />}
    </>
  )
}

export default App
