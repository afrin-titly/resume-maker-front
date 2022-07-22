import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const Login = () => {
  const [loginForm, setLoginForm] = React.useState({
    email: '',
    password: ''
  })
  const [warningStyle, setWarningStyle] = React.useState({
    emailClass: '',
    passClass: ''
  })
  const { login } = useAuth()
  const navigate = useNavigate()
  const submitLoginForm = async (e) => {
    e.preventDefault()
    let temp_email = ''
    let temp_pass = ''
    if(loginForm.password === '') {
      temp_pass = 'border-red-500'
      console.log("pass")
    }

    if(loginForm.email === '') {
      temp_email = 'border-red-500'
    }

    setWarningStyle({emailClass: temp_email , passClass: temp_pass})

    if (loginForm.email !== '' && loginForm.password !== ''){
      const response = await login(loginForm)
      console.log(response);
      if(response.status==200) {
        toast.success(response.data.message);
        navigate("/")
      }
      else {
        toast.error("Login failed");
      }
    } else {
      return
    }
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
              <input onChange={(e)=>setLoginForm({...loginForm, email: e.target.value})} className={`shadow appearance-none border ${warningStyle.emailClass} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input onChange={(e)=>setLoginForm({...loginForm, password: e.target.value})} className={`shadow appearance-none border ${warningStyle.passClass} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password" placeholder="******************"/>

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
        </div>
      </div>
    </div>
  )
}

export default Login