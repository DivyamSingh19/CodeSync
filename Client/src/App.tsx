 import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Coding from './Pages/Coding'
import Pricing from './Pages/Pricing'
function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/editor' element={<Coding/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
      </Routes>

    </div>
  )
}

export default App
