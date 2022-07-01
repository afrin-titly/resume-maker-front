import React from 'react'
import jobpost from '../images/jobpost.jpeg'

const JobPost = () => {
  return (
    <div className='p-5 w-full'>
      <a href="#" class="flex flex-col items-center bg-emerald-100 rounded-lg shadow-md md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-emerald-300">
        <img class="object-cover p-2 w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={jobpost} alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">Noteworthy technology acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-500">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </a>
    </div>
  )
}

export default JobPost