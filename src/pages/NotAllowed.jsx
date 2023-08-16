import React from 'react'
import { useNavigate } from 'react-router-dom'


const NotAllowed = () => {
    const navigate = useNavigate()
  return (
    <div className='vh-100 d-flex flex-column align-items-center justify-content-center'>
      <h4 className='bg-gradient-warning text-dark'>You are Not Autorized To access this Page</h4>
      <button className='' onClick={()=>{navigate("/login")}}>Go To Login</button>
    </div>
  )
}

export default NotAllowed
