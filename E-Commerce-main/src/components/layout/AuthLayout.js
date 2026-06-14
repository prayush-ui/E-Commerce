import React from 'react'
import { Outlet } from 'react-router-dom'
import Goback from '../Goback'

const AuthLayout = () => {
  return (
    <div className="bg-emerald-400 h-[100vh] flex justify-center">
        <div>
        <div className="justify-start flex">
        <Goback/>
      </div>
            <Outlet/>
        </div>
    </div>
  )
}

export default AuthLayout