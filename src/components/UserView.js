import React from 'react'
import Blog from './Blog'

const UserView = ({ name, blogs, logout }) => {
  const blogList = blogs.map(blog => <Blog key={blog.id} blog={blog} />)

  return (
    <>
      <h1>blogs</h1>
      <div>
        <span>{name} logged in</span>
        <button onClick={logout}>logout</button>
      </div>
      <br />
      {blogList}
    </>
  )
}

export default UserView
