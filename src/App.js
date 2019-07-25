import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import UserView from './components/UserView'

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <div>
      {user ? <UserView user={user} /> : <LoginForm setUser={setUser} />}
    </div>
  )
}

export default App
