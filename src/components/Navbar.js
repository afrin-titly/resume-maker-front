import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { currentUser, logout} = useAuth()
  console.log(currentUser)
  const navigate = useNavigate();
  const logoutUser = async (e) => {

    const response = await logout()
    console.log(response);
    if(response.status==200) {
      toast.success(response.data.message);
      navigate("/")
    }
    else {
      toast.error("Login failed");
    }
  } 
  return (
    <nav className="bg-slate-200 drop-shadow-sm border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="w-full flex flex-wrap justify-between px-5 items-center h-16">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl text-amber-800 font-semibold whitespace-nowrap"><Logo/>Re<span className="text-orange-800">sume Ma</span>ker</span>
        </Link>
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
            <Link to="/user/1" className="block py-2 pr-4 pl-3 text-amber-700 border-b border-gray-100 text-base font-semibold hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-900 md:p-0">{currentUser?.email}</Link>
            </li>
            <li>
              <Link to="/jobs" className="block py-2 pr-4 pl-3 text-amber-700 border-b border-gray-100 text-base font-semibold hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-900 md:p-0 ">Job Openings</Link>
            </li>
            <li>
              <Link to="" className="block py-2 pr-4 pl-3 text-amber-700 border-b border-gray-100 text-base font-semibold hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-900 md:p-0">Upgrade</Link>
            </li>
            <li>
              {console.log(currentUser)}
              {currentUser?
              <button onClick={logoutUser} className="block py-2 pr-4 pl-3 text-amber-700 border-b border-gray-100 text-base font-semibold hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-900 md:p-0 ">Logout</button>:
              <li>
                <Link to="/login" className="block py-2 pr-4 pl-3 text-amber-700 border-b border-gray-100 text-base font-semibold hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-900 md:p-0">Login</Link>
              </li>
              }
              </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar