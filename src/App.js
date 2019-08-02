import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import UserView from './components/UserView'
import Notification from './components/Notification'
import Error from './components/Error'
import loginService from './services/login'
import blogsService from './services/blogs'

const App = () => {
  // better solution than in the example IMO
  const initialUser = () => {
    return window.localStorage.getItem('loggedUser')
      ? JSON.parse(window.localStorage.getItem('loggedUser'))
      : null
  }

  const [user, setUser] = useState(initialUser)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const [blogFormVisible, setBlogFormVisible] = useState(false)

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await blogsService.getAll()

      const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)

      setBlogs(sortedBlogs)
    }
    getBlogs()
  }, [blogs])

  useEffect(() => {
    user && blogsService.setToken(user.token)
  }, [user])

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })

      window.localStorage.setItem('loggedUser', JSON.stringify(user))

      blogsService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      setError(error.response.data.error)
    }
  }

  const logout = () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  const handleCreate = async (event, newBlog) => {
    event.preventDefault()

    try {
      const response = await blogsService.create(newBlog)
      setBlogs(blogs.concat(response))

      setTitle('')
      setAuthor('')
      setUrl('')
      setMessage(`${title} added`)
      setBlogFormVisible(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {user ? (
        <UserView
          name={user.name}
          blogs={blogs}
          logout={logout}
          handleCreate={handleCreate}
          title={title}
          author={author}
          url={url}
          setTitle={setTitle}
          setAuthor={setAuthor}
          setUrl={setUrl}
          blogFormVisible={blogFormVisible}
          setBlogFormVisible={setBlogFormVisible}
          user={user}
        />
      ) : (
        <LoginForm
          handleLogin={handleLogin}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
      <Notification message={message} setMessage={setMessage} />
      <Error error={error} setError={setError} />
    </>
  )
}

export default App
