import React from 'react'

const JobInfo = () => {
  return (
    <div className=''>
      <p className='text-2xl font-bold'>Back-end engineer</p>
      <div>
        <b>Overview</b>
        <ul className='list-disc p-2'>
          <li>Backend Engineer; Tokyo</li>
          <li>Experience with Node.js</li>
          <li>Product: Recipe Videos</li>
        </ul>
        <b>Roles and responsibilities</b>
        <p>The company believes that software engineers should always work to solve problems by using the most appropriate technology, rather than by narrowing down their roles according to their job titles. They flexibly organize teams based on each engineer's experience and expertise, always aiming for optimization.</p>
        <b className=''>Qualification</b>
        <ul className='list-disc p-2'>
          <li>2 to 5 years of related experience</li>
          <li>First-rate customer focus, phone etiquette and work ethic</li>
          <li>Ability to work under pressure with calmness and composure</li>
        </ul>
      </div>
    </div>
  )
}

export default JobInfo