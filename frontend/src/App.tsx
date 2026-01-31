import { Navigate, Route,Routes } from 'react-router-dom'
import './App.css'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Track from './Pages/Track'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useAuth } from './hooks/useAuth'
import { useEffect } from 'react'

function App() {

const {user,checkAuthenticated}=useAuth()
  useEffect(()=>{
    checkAuthenticated()
  },[checkAuthenticated])

  
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={user?<Home/>:<Navigate to={'/login'}/>}/>
         <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route path='/track'  element={<Track/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
