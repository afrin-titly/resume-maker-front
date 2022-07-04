import React from 'react'
import JobPost from './JobPost'

const JobPosts = () => {
  return (
    <div>
      <div className='grid grid-cols-4 grid-flow-row gap-2 p-3'>
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
      </div>
    </div>
  )
}

export default JobPosts