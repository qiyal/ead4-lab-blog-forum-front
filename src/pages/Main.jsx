import React from 'react'
import { Outlet } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import Sidebar from '../components/Sidebar'

const Main = () => {
  return (
    <>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <Outlet />
        </Col>
      </Row>
    </>
  )
}

export default Main
