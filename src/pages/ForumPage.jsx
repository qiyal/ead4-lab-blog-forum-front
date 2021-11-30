import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import api from '../api'

const ForumPage = () => {
  const [name, setName] = React.useState('Qwerty')
  const [title, setTitle] = React.useState('title')
  const [posts, setPosts] = React.useState([
    { id: 1, title: 'Title 1', author: 'Author 1', text: 'Textxtxtxt txtxtxtx txtxtt txtxttx txttxt ttx' },
    { id: 2, title: 'Title 2', author: 'Author 2', text: 'Textxtxtxt txtxtxtx txtxtt txtxttx txttxt ttx' },
    { id: 3, title: 'Title 3', author: 'Author 3', text: 'Textxtxtxt txtxtxtx txtxtt txtxttx txttxt ttx' }
  ])

  React.useEffect(() => {
    api.get('')
      .then(res => {
        setName(res.data.name)
        setTitle(res.data.title)
      })
      .catch(err => alert(`Error on loading forum page: ${err}`))

    api.get('')
      .then(res => setPosts(res.data))
      .catch(err => alert(`Error on loading posts: ${err}`))
  }, [])

  return (
    <>
      <h2>Forum: { name }</h2>
      <h4 className="text-muted mb-4">{ title }</h4>

      <Row>
        {posts.map(item => (
          <Col className="mb-3" md={6} key={item.id}>
            <Link to={`/posts/${'postId'}`}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    { item.title }
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    @{ item.author }
                  </Card.Subtitle>
                  <Card.Text>
                    { item.text }
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default ForumPage
