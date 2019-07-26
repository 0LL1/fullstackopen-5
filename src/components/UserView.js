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
  setUrl
}) => {
  const blogList = blogs.map(blog => <Blog key={blog.id} blog={blog} />)

  return (
    <>
      <h1>blogs</h1>
      <div>
        <span>{name} logged in</span>
        <button onClick={logout}>logout</button>
      </div>
      <br />
      <BlogForm
        handleCreate={handleCreate}
        title={title}
        author={author}
        url={url}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setUrl={setUrl}
      />
      <br />
      {blogList}
    </>
  )
}

export default UserView
