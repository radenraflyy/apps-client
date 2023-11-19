// import React, { useEffect, useState,  } from "react"
// import SButton from '../../components/Button'
// import SNavbar from "../../components/Navbar"

// const bilanganGanjil = () => {
//   const [counter, setCounter] = useState(0)
//   const [BilanganGanjil, setBilanganGanjil] = useState(false)

//   useEffect(() => {
//     // console.log('Counter')
//     setBilanganGanjil(counter % 2 !== 0 ? true : false)
//   }, [counter])
//   // , [counter] dia akan melakukan render ulang pada state setBilanganGanjil nya kalau, [counter] ini berubah nilainya


//   return (
//     <React.Fragment>
//       <SNavbar/>
//       <h1>{BilanganGanjil ? `${counter} ini bilangan ganjil` : `${counter} ini bilangan genap`}</h1>
//       <SButton onClick={() => setCounter(counter + 1)} children='+'/>
//     </React.Fragment>
//   )
// }

// export default bilanganGanjil