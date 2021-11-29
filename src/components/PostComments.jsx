import React from 'react'

const PostComments = () => {
  const [comments, setComments] = React.useState([
    { id: 1, author: 'Author 1', text: 'Text text tetetts tettstx' }
  ])

  return (
    <div class="m-t-0">
      {comments.map(item => (
        <div class="comment-text w-100 mb-4" key={item.id}>
          <h6 class="font-medium">
            {item.author}
          </h6>
          <span class="m-b-15 d-block">
            {item.text}
          </span>
          <div class="comment-footer">
            <span class="text-muted float-right">April 14, 2019</span>
            {/* <button type="button" class="btn btn-danger btn-sm">Delete</button> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostComments
