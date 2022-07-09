import React from 'react'
import { Link } from 'react-router-dom'
import cvdp from '../images/cp_dp.png'
import Icon from "./Icon";
export default function UserSectionHead(){
    return(
        <div className='w-full p-2'>
        <div className="flex flex-row md:flex-row md:w-full p-16 pt-2">
            <img className="object-cover p-2 w-full h-auto rounded-full md:h-auto md:w-1/3 md:rounded-full" src={cvdp} alt=""/>
            <div className="flex flex-col leading-normal pl-12">
                <h4 className="mb-2 mt-3 text-3xl font-bold tracking-tight text-amber-900 dark:text-gray-900">John Doe</h4>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500 text-justify">Hi! I am john doe. I like to do bla bla and very ambitous about bla bla. Software engineer at google.</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
                    <Icon d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/> johndoe@gmail.com
                    <span className="float-right"><Icon d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /> 070-4575-9446</span>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500 text-justify"> 
                    <Icon d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/> Working at: Lumber mill for 3 yars
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500 text-justify">
                    <Icon d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></Icon> BSc. in Computer Science and Engineering from Chittagong university of Engineering and Technology
                    </p>
            </div>
        </div>
        </div>
    )
}