import {useAuth} from '../hooks/useAuth'
import TrackCard from '../Components/TrackCard'
import AddTask from '../Components/AddTask'
const Home = () => {
  const {user}=useAuth()
  return (
    <div>
    <div className=" w-full flex flex-col justify-between p-2">
        <div className="w-full p-4 sm:p-6 space-y-2">
          
          <h1 className="sm:text-2xl text-xl font-ADLaMDisplay text-center">Track Your Daily Work</h1>
          <p className="sm:text-base text-sm font-mono text-center px-2">Keep track to stay focused and productive.</p>
        </div>


        <div>
          <p className='text-left sm:text-2xl text-xl sm:px-20 px-2 py-10'>Welcome {user?.name}..!</p>
        </div>
        

        <div>
          <TrackCard text='Even though your component is typed correctly.Even though your Even though your'/>
        </div>
      
    </div>
    <AddTask/>
    </div>
  )
}

export default Home
