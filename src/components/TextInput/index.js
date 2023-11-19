import React from 'react'
import Form from 'react-bootstrap/Form'

const textInput = ({type, placeholder, name, value, onChange}) => {
  return (
    <React.Fragment>
      <Form.Control
        type={type} 
        placeholder={placeholder} 
        name={name} 
        value={value} 
        onChange={onChange}
      />
    </React.Fragment>
  )
}

export default textInput