import React from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { signup } from '../lib/users'

const Signup = () => {
  const [user, setUser] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  })
  const handleSignup = async (e) => {
    e.preventDefault()
    if(user.password !== user.confirm_password){
      toast.error(`Password doesn't match!`)
      return
    }
    if(!validEmail()) {
      toast.error('Email not valid!')
      return
    }
    const validUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password
    }

    const response = await signup(validUser)
    console.log(response.data.message)
    if(response.data.success) {
      toast.success(response.data.message)
    }
    else {
      const err = Object.keys(response.data.message).map((k)=>(
        toast.error(`${k} ${response.data.message[k]}`)
      ))
    }

  }
  const validEmail = () => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!user.email || regex.test(user.email) === false){
        return false;
    }
    return true;
}
  return (
    <div className='body-container'>
      <div className='login-container'>
        <div className="w-full max-w-lg">
          <form onSubmit={handleSignup} className="bg-white border-black-700 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input onChange={(e)=>setUser({...user, first_name: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input onChange={(e)=>setUser({...user, last_name: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input onChange={(e)=>setUser({...user, email: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input onChange={(e)=>setUser({...user, password: e.target.value})} minLength="6" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******************"/>
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input onChange={(e)=>setUser({...user, confirm_password: e.target.value})} minLength="6" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******************"/>
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>

            <div className="flex items-center justify-between">
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Login
                </button>
              </Link>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
            </div>

          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2022 Resume maker. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup