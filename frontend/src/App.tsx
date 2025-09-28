import { Route,Routes } from 'react-router-dom'
import './App.css'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Track from './Pages/Track'
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/track'  element={<Track/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App
