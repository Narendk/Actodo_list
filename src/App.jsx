import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'
import { useState } from 'react'

function App() {

  const [users, setusers] = useState(
    [
      {
        username: "Naren",
        password: "123"
      },
      {
        username: "abc",
        password: "456"
      }
    ]
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
        <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path='/landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
