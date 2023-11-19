import React from "react"
import TextInputWithLabel from "../../components/TextInputWithLabel"
import SButton from "../../components/Button"
import { Form } from "react-bootstrap"

const SForm = ({form, loading, handleChange, handleSubmit}) => {
  return (
    <React.Fragment>
      <Form>
        <TextInputWithLabel
          label="Email address"
          type="email"
          placeholder="Enter email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <TextInputWithLabel
          label="Password"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <SButton
          loading={loading}
          disabled={loading}
          className="mt-3"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </SButton>
      </Form>
    </React.Fragment>
  )
}

export default SForm
