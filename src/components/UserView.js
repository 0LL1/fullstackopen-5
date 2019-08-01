import React from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'

const UserView = ({
  name,
  blogs,
  logout,
  handleCreate,
  title,
  author,
  url,
  setTitle,
  setAuthor,
  setUrl,
  blogFormVisible,
  setBlogFormVisible,
  user
}) => {
  const blogList = blogs.map(blog => (
    <Blog key={blog.id} blog={blog} user={user} />
  ))

  const toggleVisibility = () => {
    setBlogFormVisible(!blogFormVisible)
  }

  return (
    <>
      <h1>blogs</h1>
      <div>
        <span>{name} logged in</span>
        <button onClick={logout}>logout</button>
      </div>
      <br />
      {blogFormVisible ? (
        <div>
          <BlogForm
            handleCreate={handleCreate}
            title={title}
            author={author}
            url={url}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setUrl={setUrl}
          />
          <button onClick={toggleVisibility}>cancel</button>
        </div>
      ) : (
        <div>
          <button onClick={toggleVisibility}>new blog</button>
        </div>
      )}
      <br />
      {blogList}
    </>
  )
}

export default UserView
