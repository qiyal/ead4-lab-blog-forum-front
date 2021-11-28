import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const sidebarPages = [
  { label: 'Home', path: '/' },
  { label: 'Forums', path: '/forums' },
  { label: 'Saved', path: '/saved' }
]

const Sidebar = () => {
  return (
    <>
      <ListGroup variant="flush">
        {sidebarPages.map(item => (
          <ListGroup.Item>
            <Link to={item.path}>
              {item.label}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default Sidebar
