import { Navigate, Route, Routes } from "react-router-dom"
import GuardRoute from "../components/GuardRoute"
import GuestOnlyRoute from "../components/GuestOnlyRoute"
import SNavbar from "../components/Navbar"

import { HomeRoute } from "./HomeRoute"
import { CategoriesRoute } from "./CategoriesRoute"
import TalentsRoute from "./TalentsRoute"
import Login from "../pages/Sign"
import { PaymentsRoute } from './PaymentRoutes'
import { EventsRoute } from './EventRoute'
import { OrdersRoute } from "./OrderRoute"

const AppRoutes = () => {
  return (
    <Routes>
    <Route
      path='login'
      element={
        <GuestOnlyRoute>
          <Login />  {/*ini children dari GuestOnlyRoute*/}
        </GuestOnlyRoute>
      }
    />
    <Route
      path='/'
      element={
        <>
          <SNavbar />
          <GuardRoute />
        </>
      }
    >
      <Route path='dashboard/*' element={<HomeRoute />} />
      <Route path='categories/*' element={<CategoriesRoute />} />
      <Route path='talents/*' element={<TalentsRoute />} />
      <Route path='payments/*' element={<PaymentsRoute />} />
      <Route path='events/*' element={<EventsRoute />} />
      <Route path='orders/*' element={<OrdersRoute />} />
      <Route path='' element={<Navigate to='/dashboard' replace={true} />} />
    </Route>
  </Routes>
  )
}
export default AppRoutes
