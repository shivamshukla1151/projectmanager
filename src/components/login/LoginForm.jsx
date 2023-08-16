import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {user} from '../../userinfo/User';
import Alert from 'react-bootstrap/Alert';
import { json, useNavigate } from 'react-router-dom';
const LoginForm = () => {
  //state defination
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState({
    type:'',
    isActive:false
  })
  const navigate = useNavigate()

    //saving the user to the localstorage
    localStorage.setItem('user',JSON.stringify(user))

  //function handling email
  const onEmailChangeHandler = (event)=>{
    setEmail(event.target.value)
  }

  //funtion handling password
  const onPasswordChangeHandler = (event)=>{
    setPassword(event.target.value)
  }

  //function handling the submit button
  const onSubmitHandler = (event)=>{
    event.preventDefault()
    if(email===user.email && password===user.password){
      const fetchUser = JSON.parse(localStorage.getItem('user'))
       fetchUser.isAuthenticated=true
      localStorage.setItem('user',JSON.stringify(fetchUser))
      setAlert((prev)=>({
        ...prev,
        type:'success',
        isActive:true
      }))
     navigate('/user/dashboard')
    }
    else{
      setAlert((prev)=>({
        ...prev,
        type:'danger',
        isActive:true
      }))
      setEmail("")
      setPassword("")
     navigate('/login')

    }
  }

  return (
       <Form className='border border-light shadow p-3 mb-5 bg-white rounded p-4 w-50'>
        
          {alert.isActive&&<Alert key={alert.type} variant={alert.type}>
                              {alert.type==='success'? 'Welcome' : 'password / email is invalid'}
                          </Alert>}

           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" onChange={onEmailChangeHandler}/>
             <Form.Text className="text-muted">
               We'll never share your email with anyone else.
             </Form.Text>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" onChange={onPasswordChangeHandler}/>
           </Form.Group>
           
           <Button variant="secondary border" type="submit" onClick={onSubmitHandler}>
              Submit
           </Button>
     </Form>
  )
}

export default LoginForm



