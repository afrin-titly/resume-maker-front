import React from 'react'
import { Link } from 'react-router-dom'
import cvdp from '../images/cp_dp.png'
export default function UserSectionHead(){
    return(
        <div className='w-full p-2'>
        <div className="flex flex-row md:flex-row md:w-full p-16 pt-2">
            <img className="object-cover p-2 w-full h-auto rounded-full md:h-auto md:w-1/3 md:rounded-full" src={cvdp} alt=""/>
            <div className="flex flex-col leading-normal pl-12">
                <h4 className="mb-2 mt-3 text-3xl font-bold tracking-tight text-amber-900 dark:text-gray-900">John Doe</h4>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Hi! I am john doe. I like to do bla bla and very ambitous about bla bla. Software engineer at google.</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">johndoe@gmail.com | 010-232-2312</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">working at: Lumber mill for 3 yars</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">graduated from Chittagong university of Engineering and Technology</p>
            </div>
        </div>
        </div>
    )
}