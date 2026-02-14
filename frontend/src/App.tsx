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
import AddTask from './Components/AddTask'
import { Loader } from 'lucide-react'
function App() {

const {user,loading,checkAuthenticated}=useAuth()
  useEffect(()=>{
    checkAuthenticated()

  },[checkAuthenticated])

  console.log(user)


  if(loading) return (
    <div className='flex justify-center items-center h-screen'>
    <Loader className='size-10 animate-spin'/>
    </div>
  )

  
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          
         <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/addTask" element={user ? <AddTask/>:<Navigate to="/login" /> }/>
          <Route path='/track'  element={<Track/>}/>
          <Route path='/' element={user?<Home/>:<Navigate to={'/login'}/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
