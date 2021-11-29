import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row, Card } from 'react-bootstrap'
import api from '../api'

const Home = () => {
  const [posts, setPosts] = React.useState([
    { title: 'Title 1', author: 'Author 1', text: 'Textxtxtxttxtxtxtx txtxtt txtxttx txttxt ttx' },
    { title: 'Title 2', author: 'Author 2', text: 'Textxtxtxttxtxtxtx txtxtt txtxttx txttxt ttx' },
    { title: 'Title 3', author: 'Author 3', text: 'Textxtxtxttxtxtxtx txtxtt txtxttx txttxt ttx' }
  ])

  React.useEffect(() => {
    api.get('/post-api/post/all')
      .then(res => setPosts(res.data))
      .catch(err => alert(`Error on loading posts: ${err}`))
  }, [])

  return (
    <>
      <h2 className="mb-2">Posts</h2>

      <Link className="mb-4" to="/add-post">
        <Button>Write post</Button>
      </Link>

      <Row>
        {posts.map(item => (
          <Col className="mb-3" md={6}>
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

export default Home
