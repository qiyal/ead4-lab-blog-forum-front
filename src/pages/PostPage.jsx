import React from 'react'
import { Card } from 'react-bootstrap'

import PostComments from '../components/PostComments'

const PostPage = () => {
  return (
    <>
      <h2>Post title</h2>

      <Card>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <PostComments />
        </Card.Footer>
      </Card>
    </>
  )
}

export default PostPage
