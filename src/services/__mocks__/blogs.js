const blogs = [
  {
    likes: 1,
    title: 'Algebraic Effects for the Rest of Us',
    author: 'Dan Abramov',
    url: 'https://overreacted.io/algebraic-effects-for-the-rest-of-us/',
    user: {
      username: 'olli',
      name: 'Olli',
      id: '5d3964fee5462b0d95bf0286'
    },
    id: '5d43f9f6dd0796401c0bd7a1'
  }
]

const getAll = () => {
  Promise.resolve(blogs)
}

export default { getAll }
