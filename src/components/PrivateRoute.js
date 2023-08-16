import React from 'react'
import { Outlet } from 'react-router-dom'
import NotAllowed from '../pages/NotAllowed'
const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      {(user && user.isAuthenticated&&<Outlet/>)||<NotAllowed/>}
    </div>
  )
}

export default PrivateRoute
