import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ message, setMessage }) => {
  if (message === null) {
    return null
  }

  setTimeout(() => {
    setMessage(null)
  }, 3000)

  return <h3 className="success">{message}</h3>
}

Notification.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func.isRequired
}

export default Notification
