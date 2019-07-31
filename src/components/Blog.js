import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className="blog">
      <p onClick={toggleDetails} className="title">
        {blog.title} by {blog.author}
      </p>
      {showDetails && (
        <>
          <p>
            {blog.likes} likes
            <button>like</button>
          </p>
          <p>Added by {blog.user.name}</p>
        </>
      )}
    </div>
  )
}

export default Blog
