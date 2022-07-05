import React from 'react'
import toast from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'
import cover from "../../images/cover.jpg"
import Cvs from '../Cvs'
import JobPosts from '../JobPosts'
const Home = () => {

  const [params] = useSearchParams()
  React.useEffect(() =>{
    if(params.get('redirected') === 'true' ) {
      toast.success("Account varified.")
    }
  },[])

  return (
    <div className='p-3 mx-auto'>
      <div className='w-full'>
        <img src={cover} className='pl-5 pr-5 object-fill w-full h-[550px]' />
      </div>
      <JobPosts />
      <Cvs/>
    </div>
  )
}

export default Home