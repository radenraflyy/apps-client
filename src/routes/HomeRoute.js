import React from 'react'
import Dashboard from '../pages/dashboard'
import { Route, Routes } from 'react-router-dom'

const HomeRoute = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </React.Fragment>
  )
}

export { HomeRoute }