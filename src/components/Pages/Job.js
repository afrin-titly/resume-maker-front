import React from 'react'
import JobDetail from '../JobDetail'
import Cvs from '../Cvs'
import SearchBar from '../SearchBar'

const Job = () => {
  return (
    <div className='m-8'>
      <JobDetail />
      <div className='mt-10'>
        <div className='flex flex-row'>
          <span class="w-1/3"></span>
          <p className='text-2xl font-bold text-center w-1/3'>Applications</p>
          <SearchBar/>
        </div>
        <Cvs />
    </div>
    </div>
  )
}

export default Job