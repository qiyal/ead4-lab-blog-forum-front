import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import api from '../api'

const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const logIn = e => {
    e.preventDefault()

    api({
      url: '',
      method: 'post',
      data: { username, password }
    }).then(res => {

    }).catch(err => alert(`Wrong username or password. Error: ${err}`))
  }

  return (
    <>
      <h3 className="text-center mb-4">Log in</h3>

      <Row>
        <Col md={{ span: 4, offset: 4}}>
          <Form onSubmit={logIn} className="w-4">
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
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button as="div" variant="primary" type="submit" block>
              Log in
            </Button>

            <Form.Text as="p" className="text-muted">
              Don't have an account? <Link className="link-primary" to="/register">Sign up</Link>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Login
