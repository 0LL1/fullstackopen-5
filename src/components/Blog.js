import React, { useState } from 'react'
import blogsService from '../services/blogs'

const Blog = ({ blog, user }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [likes, setLikes] = useState(blog.likes)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const like = async blog => {
    try {
      const newBlog = { ...blog, likes: likes + 1 }

      const response = await blogsService.update(blog.id, newBlog)

      setLikes(response.likes)
    } catch (error) {
      console.log(error)
    }
  }

  const remove = async blog => {
    if (window.confirm(`Remove ${blog.title}?`)) {
      await blogsService.remove(blog.id)
    }
  }

  return (
    <div className="blog">
      <p onClick={toggleDetails} className="title">
        {blog.title} by {blog.author}
      </p>
      {showDetails && (
        <>
          <p>
            {likes} likes
            <button onClick={() => like(blog)}>like</button>
          </p>
          <p>Added by {blog.user.name}</p>
          {user.username === blog.user.username && (
            <button onClick={() => remove(blog)}>remove</button>
          )}
        </>
      )}
    </div>
  )
}

export default Blog
