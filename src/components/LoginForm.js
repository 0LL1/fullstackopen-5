import React from 'react'

const LoginForm = ({
  handleLogin,
  username,
  password,
  setUsername,
  setPassword
}) => {
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
