import React, {useEffect, useState} from "react"
import { Navigate, json } from "react-router-dom"
import { Button, Container, Spinner, Table } from "react-bootstrap"
import SButton from "../../components/Button"
import SBreadCrumbs from "../../components/BreadCrumbs"
import SNavbar from "../../components/Navbar"
import axios from "axios"
import { config } from "../../configs"
import TableWithAction from '../../components/TableWithAction'

const Dashboard = () => {
  const token = localStorage.getItem('auth')
  const parseToken = JSON.parse(token)
  console.log(parseToken.token)
  const [getCategories, setGetCategories] = useState([])

  const getAllCategories = async () => {
    try {
      let res = await axios.get(`${config.API_DEV}/cms/categories`,{
        headers: {
          Authorization: `Bearer ${parseToken.token}`
        }
      })
      setGetCategories(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])



  console.log(getCategories)
  return (
    <React.Fragment>
      <Container className="mt-4">
        <SBreadCrumbs />
        <div>
      <Table responsive="md">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            getCategories.map((el, i) => (
            <tr key={i}>
              <td>{i += 1}</td>
              <td>{el?.name}</td>
              <td>Edit</td>
            </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
      </Container>
    </React.Fragment>
  )
}

export default Dashboard
