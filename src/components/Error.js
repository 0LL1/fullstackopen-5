import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ error, setError }) => {
  if (error === null) {
    return null
  }

  setTimeout(() => {
    setError(null)
  }, 3000)

  return <h3 className="error">{error}</h3>
}

Error.propTypes = {
  error: PropTypes.string,
  setError: PropTypes.func.isRequired
}

export default Error
