import React, { useContext } from 'react'
import  {AuthContext}  from '../context/UserContext'

const Profile = () => {

    const user = useContext(AuthContext)

  return (
    <div>
        <h1>Profile</h1>
        <h3>Name:{user.name}</h3>
        <h3>Email:{user.email}</h3>
        <h3>Role:{user.role}</h3>
    </div>
  )
}

export default Profile