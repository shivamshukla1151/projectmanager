import React from 'react'
import Topbar from './topbar/Topbar'
import Footer from './footer/Footer'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Topbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
