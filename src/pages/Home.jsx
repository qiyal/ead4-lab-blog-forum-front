import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Card } from 'react-bootstrap'
import axios from 'axios'

const Home = () => {
  const [posts, setPosts] = React.useState([1, 2, 3, 4, 5])

  React.useEffect(() => {
    axios.get('')
      .then(res => {
        //
      })
      .catch(err => {
        //
      })
  }, [])

  return (
    <>
      <h2 className="mb-2">Posts</h2>

      <Row>
        {posts.map(() => (
          <Col className="mb-3" md={6}>
            <Link to={`/posts/${'postId'}`}>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
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
