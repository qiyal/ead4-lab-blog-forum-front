import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <h3 className="text-center mb-4">Sign up</h3>

      <Row>
        <Col md={{ span: 4, offset: 4}}>
          <Form className="w-4">
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Enter surname" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
