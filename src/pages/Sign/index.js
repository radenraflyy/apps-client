import React, { useState } from "react"
import { Container, Card } from "react-bootstrap"
import SAlert from "../../components/Alert"
import SForm from "./form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { postData } from "../../utils/fetch"
import { userLogin } from "../../redux/auth/actions"

function PageSign() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [alert, setAlert] = useState({
    status: "",
    message: "",
    type: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const res = await postData(`cms/sign`, form)
      dispatch(
        userLogin(
          res.data.data.token,
          res.data.data.role,
          res.data.data.email,
          res.data.data.refreshToken
        )
      )
      // localStorage.setItem('token', res.data.data.token)
      // localStorage.setItem('auth', JSON.stringify(res.data.data))
      // console.log('token', res.data.data.token)
      setLoading(false)
      setAlert({
        status: false,
        message: "Berhasil Login",
        type: "success",
      })

      navigate("/")
    } catch (error) {
      setLoading(false)
      setAlert({
        status: true,
        message: error?.response?.data?.msg ?? "Internal Server Error",
        type: "danger",
      })
    }
  }

  // const token = localStorage.getItem('token')

  // if (token) return <Navigate to='/' replace={true}/>

  return (
    <Container md={12} className="my-5">
      <div className="m-auto w-50">
        {alert && <SAlert type={alert.type} message={alert.message} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title>Form Login</Card.Title>
          <SForm
            form={form}
            loading={loading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default PageSign
