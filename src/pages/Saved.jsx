import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, Card } from 'react-bootstrap'

const Saved = () => {
  const [posts, setPosts] = React.useState([1, 2, 3])
  return (
    <>
      <h2 className="mb-2">Saved</h2>

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
                </Card.Body>
                <Card.Footer>
                  <Button type="button" variant="danger">Remove</Button>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Saved
