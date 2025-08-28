
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className='max-w-sm w-full border p-5 rounded-lg'>
      <div className="space-y-2">
      <div className="text-center ">
        <h1 className="text-lg font-medium">Create a account</h1>
        <p className="text-xs">Sign up to start your journey with Tracktual.</p>
      </div>
      <div className="flex flex-col px-4  gap-2">
        <label htmlFor="email1">Email:</label>
        <input type="email" name="email" id="email1"  />
      </div>
      <div className="flex flex-col px-4  gap-2">
        <label htmlFor="password1">Password:</label>
        <input type="password" name="password" id="password1" />
      </div>
      <div className="flex justify-center">
        <button>Signup</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Login
