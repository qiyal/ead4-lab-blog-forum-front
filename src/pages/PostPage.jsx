import React from 'react'
import { Button, Card } from 'react-bootstrap'

import PostComments from '../components/PostComments'
import api from '../api'

const PostPage = () => {
  const [isSaved, setIsSaved] = React.useState(false)

  const handleSave = e => {
    api({
      url: '',
      method: 'post',
      data: { postId: 0, userId: 0 }
    }).then(res => {
      setIsSaved(state => !state)
    }).catch(err => alert(`Error on saving post: ${err}`))
  }

  return (
    <>
      <h2>Post title</h2>
      <Button
        variant={isSaved ? 'warning' : 'success'}
        onClick={handleSave}
        className="mb-3"
      >
        {isSaved ? 'Remove' : 'Save'}
      </Button>
      <Card>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas commodi minus minima. Officiis modi beatae nihil nobis et consequatur quo harum incidunt ea consectetur. Beatae quia obcaecati saepe culpa?
            Ut dignissimos incidunt quas recusandae alias ipsam autem dicta ipsum amet, nulla non corporis obcaecati voluptatum neque architecto perspiciatis maxime cum corrupti nobis vel? Perspiciatis asperiores quo corporis? Eveniet, consequuntur?
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <h5 className="mb-4">Comments</h5>
          <PostComments />
        </Card.Footer>
      </Card>
    </>
  )
}

export default PostPage
