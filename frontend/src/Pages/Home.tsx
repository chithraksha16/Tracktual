import {useAuth} from '../hooks/useAuth'

const Home = () => {
  const {user}=useAuth()
  return (
    <div className='w-full'>
    <div className=" w-full flex flex-col justify-between p-2">
        <div className="w-full p-4 sm:p-6 space-y-2">
          
          <h1 className="sm:text-2xl text-xl font-ADLaMDisplay text-center">Track Your Daily Work</h1>
          <p className="sm:text-base text-sm font-mono text-center px-2">Keep track to stay focused and productive.</p>
        </div>


        <p className=' sm:text-2xl text-lg font-bold'>Welcome back <span className='text-blue-400'>{user?.name}..!</span></p>
          
        <div className='w-full flex justify-center items-center sm:p-6 p-2 gap-10'>
          <div>
            <input className='border py-1 w-3xl rounded-lg' type="search" name="" id="" />
          </div>
          
          <div>
            <button className='px-3 py-1.5 border rounded'>Add Task</button>
          </div>
        </div>

        
        

        
      
    </div>
    
    </div>
  )
}

export default Home
