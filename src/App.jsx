import React from 'react'
import { UserProvider } from './context/UserContext'
import Profile from './components/Profile'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <UserProvider>
        <Header/>
        <Profile/>
      </UserProvider>
    </div>
  )
}

export default App