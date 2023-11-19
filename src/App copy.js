import { useState } from "react"
import "./App.css"
import Table from "./components/Table"
import Button from "./components/Button"

function App() {
  const users = [
    {
      _id: 1,
      name: "Yohanes",
      umur: 22,
      status: true,
    },
    {
      _id: 2,
      name: "Raden",
      umur: 17,
      status: false,
    },
    {
      _id: 3,
      name: "Kouseki",
      umur: 16,
      status: true,
    },
  ]

  const [isLogin, setIsLogin] = useState(false)
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({
    name: "",
    usia: "",
    tahunLahir: "",
  })

  const handleSubmit = () => {
    setForm({ ...form, usia: 2023 - form.tahunLahir })
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] })
  }

  return (
    <>
      <Button onClick={() => alert("Jangan Lupa Save")}>Save</Button> <br />
      <Button onClick={() => setIsLogin(true)}>
        {isLogin ? "Sudah Login" : "Silahkan Login"}
      </Button>
      {isLogin && <Button onClick={() => setIsLogin(false)}>Logout</Button>}
      <Table users={users} />
      {count}
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <br />
      <br />
      {/* Form Input */}
      <label>Name</label>
      <br />
      <input type="text" value={form.name} name="name" onChange={handleChange} />
      <br />
      <label>Tanggal Lahir</label>
      <br />
      <input type="number" value={form.tahunLahir} name="tahunLahir" onChange={handleChange} />
      <p>Umur Saya adalah {form.usia}</p>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  )
}

export default App
