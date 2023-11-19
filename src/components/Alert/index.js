import React from 'react'
import {Alert} from 'react-bootstrap'

const SAlert = ({type, message}) => {
  return (
    <React.Fragment>
      <Alert variant={type}>{message}</Alert>
    </React.Fragment>
  )
}

export default SAlert