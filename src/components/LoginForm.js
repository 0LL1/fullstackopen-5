import React, { useState } from 'react'
import loginService from '../services/login'

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async event => {
    event.preventDefault()
    console.log('logging in with', username, password)

    try {
      const user = await loginService.login({
        username,
        password
      })

      setUser(user)
      setUsername('')
      setPassword('')

      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>log in to application</h1>

      <form onSubmit={handleLogin}>
        <label>
          username
          <br />
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <br />
        <label>
          password
          <br />
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <br />
        <button type="submit">login</button>
      </form>
    </>
  )
}

export default LoginForm
