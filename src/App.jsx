import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Account from "./pages/Account"


function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </div>
  )
}

export default App
