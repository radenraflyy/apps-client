import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

        // textSecond Nama Bread Crumbnya
        // urlSecond Link BreadCrumb
        // textThird Halaman sekarang dan Active

const SBreadCrumbs = ({textSecond, textThird, urlSecond}) => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Breadcrumb className='my-2'>
        <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>

        {!textThird && 
          <Breadcrumb.Item active>{textSecond}</Breadcrumb.Item>}

        {textThird && 
        <Breadcrumb.Item onClick={() => navigate(urlSecond)}>{textSecond}</Breadcrumb.Item>}

        {textThird && <Breadcrumb.Item active>{textThird}</Breadcrumb.Item>}

      </Breadcrumb>
    </React.Fragment>
  )
}

export default SBreadCrumbs