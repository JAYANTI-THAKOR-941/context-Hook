import React, { useContext } from 'react'
import { AuthContext } from '../context/UserContext'

const Header = () => {
    const user = useContext(AuthContext)
  return (
    <div>
        <button>{user.name}</button>
        <h3>{user.email}</h3>
    </div>
  )
}

export default Header