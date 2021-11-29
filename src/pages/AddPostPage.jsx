import React from 'react'
import { Form, Button } from 'react-bootstrap'
import api from '../api'

const AddPostPage = () => {
  const [title, setTitle] = React.useState('')
  const [text, setText] = React.useState('')

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }

  const handleTextChange = e => {
    setText(e.target.value)
  }

  const addPost = e => {
    e.preventDefault()

    api({
      url: '',
      method: 'post',
      data: { title, text }
    }).then(res => {
      setTitle('')
      setText('')
    }).catch(err => alert(`Error on submitting post: ${err}`))
  }

  return (
    <>
      <h2 className="mb-4">Write post</h2>

      <Form onSubmit={addPost}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={handleTitleChange}
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Post text</Form.Label>
          <Form.Control
            value={text}
            onChange={handleTextChange}
            rows={3}
            as="textarea"
          />
        </Form.Group>

        <Button type="submit">Add post</Button>
      </Form>
    </>
  )
}

export default AddPostPage
