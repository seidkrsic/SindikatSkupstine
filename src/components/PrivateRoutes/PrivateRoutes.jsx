import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'



const PrivateRoutes = () => {
    const {user} = useContext(AuthContext)
    return (
        user ? <Outlet/> : <Navigate to='/login'/>
      )
}

export default PrivateRoutes