import React from 'react'
import { Link } from 'react-router-dom'
import { login } from '../lib/session'

const Login = () => {
  const [loginForm, setLoginForm] = React.useState({
    email: '',
    password: ''
  })
  const submitLoginForm = async (e) => {
    e.preventDefault()
    console.log(loginForm)
    const response = await login(loginForm)
    // setLoginForm({
    //   email: '',
    //   password: ''
    // })

    console.log(response)
  }

  return (
    <div className='body-container'>
      <div className='login-container'>
        <div className="w-full max-w-lg">
          <form onSubmit={submitLoginForm} className="bg-white border-black-700 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input onChange={(e)=>setLoginForm({...loginForm, email: e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input onChange={(e)=>setLoginForm({...loginForm, password: e.target.value})} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>

              <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Login
                </button>
              <Link to="/signup">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign Up
                </button>
              </Link>

              </div>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2022 Resume maker. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login