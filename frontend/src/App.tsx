import { Route,Routes } from 'react-router-dom'
import './App.css'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Track from './Pages/Track'
function App() {

  return (
    <>
      <div>
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
