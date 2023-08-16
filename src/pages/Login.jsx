import React from 'react'
import LoginForm from '../components/login/LoginForm'
const Login = () => {
  return (
    <div className=' vh-100 d-flex flex-column align-items-center justify-content-center'>
      <h1 className='text-secondary font-weight-bold'>Login</h1>
      <LoginForm/>
    </div>
  )
}

export default Login
