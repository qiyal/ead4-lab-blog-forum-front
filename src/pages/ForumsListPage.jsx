import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Badge } from 'react-bootstrap'
import api from '../api'


const ForumsPage = () => {
  const [forums, setForums] = React.useState([
    { id: 1, name: 'Forum 1', title: 'Title 1' },
    { id: 2, name: 'Forum 2', title: 'Title 2' },
    { id: 3, name: 'Forum 3', title: 'Title 3' }
  ])

  React.useEffect(() => {
    api.get('')
      .then(res => setForums(res.data))
      .catch(err => alert(`Error on loading forums: ${err}`))

  }, [])

  return (
    <>
      <h2 className="mb-2">Forums</h2>

      <ListGroup variant="flush">
        {forums.map(item => (
          <Link to="/forums/:id" key={item.id}>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  { item.name }
                </div>
                { item.title }
              </div>
              <Badge variant="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </>
  )
}

export default ForumsPage
