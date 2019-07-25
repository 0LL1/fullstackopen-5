import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import UserView from './components/UserView'
import loginService from './services/login'
import blogsService from './services/blogs'

const App = () => {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await blogsService.getAll()
      setBlogs(blogs)
    }
    getBlogs()
  }, [])

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {user ? (
        <UserView name={user.name} blogs={blogs} />
      ) : (
        <LoginForm
          handleLogin={handleLogin}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
    </>
  )
}

export default App
