import React from 'react'
import jobpost from '../images/jobpost.jpeg'
import { Link } from 'react-router-dom'

const JobPost = () => {
  return (
    <div className="max-w-sm bg-amber-400 hover:bg-amber-300 rounded-lg border border-gray-200 shadow-md dark:hover:bg-teal-400">
      <Link to="/jobs/1">
        <img className="rounded-t-lg md:h-60 md:w-full p-2" src={jobpost} alt="" />
      </Link>
      <div className="p-5">
        <Link to="/jobs/1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link to="/jobs/1" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
          Read more
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>

  )
}

export default JobPost