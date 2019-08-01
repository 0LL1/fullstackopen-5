import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders title, author, and likes', () => {
  const blog = {
    title: 'Test title',
    author: 'Test author',
    likes: 4
  }

  const onClick = () => {
    //...
  }

  const component = render(<SimpleBlog blog={blog} onClick={onClick} />)

  component.debug()

  const titleAndAuthor = component.getByText('Test title Test author')
  expect(titleAndAuthor).toBeDefined()

  const likes = component.getByText('blog has 4 likes')
  expect(likes).toBeDefined()
})
