import React from 'react'
import { Form } from 'react-bootstrap'
import FormControl from '../TextInput'

const TextInputWithLabel = ({label, type, placeholder, name, value, onChange}) => {
  return (
    <React.Fragment>
      <Form.Group className='mb-2'>
        <Form.Label>{label}</Form.Label>
      </Form.Group>
      <FormControl
        type={type} 
        placeholder={placeholder} 
        name={name} 
        value={value} 
        onChange={onChange}
      />
    </React.Fragment>
  )
}

export default TextInputWithLabel