import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import UserView from './components/UserView'
import loginService from './services/login'
import blogsService from './services/blogs'

const App = () => {
  // better solution than in the example IMO
  const initialUser = () =>
    JSON.parse(window.localStorage.getItem('loggedUser')) || null

  const [user, setUser] = useState(initialUser)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await blogsService.getAll()
      setBlogs(blogs)
    }
    getBlogs()
  }, [])

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
      console.log(error)
    }
  }

  const logout = () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  const handleCreate = async (event, newBlog) => {
    event.preventDefault()

    const response = await blogsService.create(newBlog)
    setBlogs(blogs.concat(response))

    setTitle('')
    setAuthor('')
    setUrl('')
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
    </>
  )
}

export default App
