import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import api from '../api'

const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [surname, setSurname] = React.useState('')
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleSurnameChange = e => {
    setSurname(e.target.value)
  }

  const register = e => {
    e.preventDefault()

    if (username && password && name && surname) {
      api({
        url: '',
        method: 'post',
        data: { username, password, name, surname }
      }).then(res => {
        setIsLoggedIn(true)
      }).catch(err => alert(`Wrong username or password. Error: ${err}`))
    } else {
      alert('Enter required fields!')
    }
  }

  return (
    <>
      { isLoggedIn ? <Navigate to="/" /> : null }
      <h3 className="text-center mb-4">Sign up</h3>

      <Row>
        <Col md={{ span: 4, offset: 4}}>
          <Form onSubmit={register} className="w-4">
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={username}
                onChange={handleUsernameChange}
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={handleNameChange}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                value={surname}
                onChange={handleSurnameChange}
                type="text"
                placeholder="Enter surname"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button as="div" variant="primary" type="submit" block>
              Sign up
            </Button>

            <Form.Text as="p" className="text-muted">
              Already have an account? <Link className="link-primary" to="/login">Log in</Link>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Login
