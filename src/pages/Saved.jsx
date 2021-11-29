import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, Card } from 'react-bootstrap'

const Saved = () => {
  const [posts, setPosts] = React.useState([
    { id: 1, title: 'Title 1', author: 'Author 1', text: 'Textxtxtxttxtxtxtx txtxtt txtxttx txttxt ttx' },
    { id: 2, title: 'Title 2', author: 'Author 2', text: 'Textxtxtxttxtxtxtx txtxtt txtxttx txttxt ttx' },
    { id: 3, title: 'Title 3', author: 'Author 3', text: 'Textxtxtxttxtxtxtx txtxtt txtxttx txttxt ttx' }
  ])
  return (
    <>
      <h2 className="mb-2">Saved</h2>

      <Row>
        {posts.map(item => (
          <Col className="mb-3" md={6} key={item.id}>
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
