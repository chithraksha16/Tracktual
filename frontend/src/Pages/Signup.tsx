const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className='max-w-md w-full border px-5'>
      <div>
      <div className="text-center">
        <h1>Create a account</h1>
        <p></p>
      </div>
      <div>
        <label htmlFor="name1">Name:</label>
        <input type="text" name="name" id="name1"  />
      </div>
      <div>
        <label htmlFor="email1">Email:</label>
        <input type="email" name="email" id="email1"  />
      </div>
      <div>
        <label htmlFor="password1">Password:</label>
        <input type="password" name="password" id="password1" />
      </div>
      <div>
        <button>Signup</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
