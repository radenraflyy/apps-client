import React from 'react'
// Text bentuknya nya array agar bisa di Map
const Thead = ({text}) => {
  return (
    <React.Fragment>
      <thead>
        <tr>
          {text.map((texts, i) => {
            return <th key={i}>{texts}</th>
          })}
        </tr>
      </thead>
    </React.Fragment>
  )
}

export default Thead