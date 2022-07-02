import React from 'react'
import toast from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'
import cover from "../images/cover.webp"
import JobPost from './JobPost'
import UPProgressBar from './UPProgressBar'
const Home = () => {

  const [params] = useSearchParams()
  React.useEffect(() =>{
    if(params.get('redirected') === 'true' ) {
      toast.success("Account varified.")
    }
  },[])

  return (
    
    <div className='p-3 mx-auto'>
      <UPProgressBar filled="50%"></UPProgressBar>
      <div className='w-full'>
        <img src={cover} className='object-fill w-full h-80 rounded-lg' />
      </div>
      <div className='grid grid-cols-3 grid-flow-row gap-4 p-3'>
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

export default Home