import React from 'react'
import toast from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'
const Home = () => {

  const [params] = useSearchParams()
  React.useEffect(() =>{
    if(params.get('redirected') === 'true' ) {
      toast.success("Account varified.")
    }
  },[])

  return (
    <div>Home</div>
  )
}

export default Home