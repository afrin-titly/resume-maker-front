import React from 'react'
import jobpost from '../images/jobpost.jpeg'
import JobInfo from './JobInfo'

const JobDetail = () => {
  return (
    <div className='flex flex-row space-x-4'>
      <img src={jobpost} className='w-96' />
      <JobInfo />
    </div>
  )
}

export default JobDetail