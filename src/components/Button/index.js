import React, { Children } from 'react'
import {Button} from 'react-bootstrap'

const SButton = ({onClick, children, variant, className, disabled, size, loading}) => {
  return (
    <>
    <Button 
      className={className}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {loading ? 'loading cuy...': children}</Button>
    </>
  )
}

export default SButton