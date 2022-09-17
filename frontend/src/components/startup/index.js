import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../main/Header'

const Startup = () => {
  return (
    <div>
       <Header />
       <Outlet />
    </div>
  )
}

export default Startup