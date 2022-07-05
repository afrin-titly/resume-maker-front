import React from 'react'
import { Link } from 'react-router-dom'
import cvdp from '../images/cp_dp.png'
export default function UserSectionHead(){
    return(
        <div className='w-full'>
        <Link to="/user/1" className="flex flex-row md:flex-row md:w-full p-12">
            <img className="object-cover p-2 w-full rounded-t-lg md:h-80 md:w-1/3 md:rounded-none md:rounded-l-lg" src={cvdp} alt=""/>
            <div className="flex flex-col leading-normal">
                <h4 className="mb-2 mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-900">John Doe</h4>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Hi! I am john doe. Software engineer at google.</p>
            </div>
        </Link>
        </div>
    )
}