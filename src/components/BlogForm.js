import React from 'react'

const BlogForm = ({
  handleCreate,
  title,
  author,
  url,
  setTitle,
  setAuthor,
  setUrl
}) => {
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={event => handleCreate(event, { title, author, url })}>
        <label>
          title
          <br />
          <input
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </label>
        <br />
        <label>
          author
          <br />
          <input
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </label>
        <br />
        <label>
          url
          <br />
          <input
            type="text"
            value={url}
            name="Url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </label>
        <br />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm
