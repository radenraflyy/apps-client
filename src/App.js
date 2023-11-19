import React, { useEffect } from "react"
import { BrowserRouter } from 'react-router-dom'
import {listen} from './redux/listener'
import AppRoutes from "./routes";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function App() {
  useEffect(() => {
    listen();
  }, []);


  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )  
}

export default App
