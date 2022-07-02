import React from 'react'
import cvdp from '../images/cp_dp.png'

export default function Cv(){
  return (
    <div className='p-5 w-full'>
      <a href="#" className="flex flex-col items-center bg-emerald-100 rounded-lg shadow-md md:flex-col md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-emerald-300">
        <img className="object-cover p-2 w-full rounded-t-lg md:h-60 md:w-full md:rounded-none md:rounded-l-lg" src={cvdp} alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">John Doe</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Hi! I am john doe. Software engineer at google.</p>
        </div>
      </a>
    </div>
  )
}