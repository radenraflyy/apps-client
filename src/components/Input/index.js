import React from 'react'
import propTypes from 'prop-types'

const Input = ({type, value, name, onChange}) => {
  return <input type={type} value={value} name={name} onChange={onChange}/> 
}

// defaultProps = {
//   name: 'name'
// }

Input.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired
}

export default Input