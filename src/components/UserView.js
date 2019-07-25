import React from 'react'
import Blog from './Blog'

const UserView = ({ user, blogs }) => {
  const blogList = blogs.map(blog => <Blog key={blog.id} blog={blog} />)

  return (
    <div>
      <h1>blogs</h1>
      <p>{user.name} logged in</p>
      {blogList}
    </div>
  )
}

export default UserView
