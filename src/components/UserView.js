import React from 'react'
import Blog from './Blog'

const UserView = ({ name, blogs }) => {
  const blogList = blogs.map(blog => <Blog key={blog.id} blog={blog} />)

  return (
    <>
      <h1>blogs</h1>
      <p>{name} logged in</p>
      {blogList}
    </>
  )
}

export default UserView
