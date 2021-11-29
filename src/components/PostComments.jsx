import React from 'react'

const PostComments = () => {
  const [comments, setComments] = React.useState([1, 2, 3])
  return (
    <div class="m-t-0">
      {comments.map(item => (
        <div class="comment-text w-100 mb-4">
          <h6 class="font-medium">James Thomas</h6> <span class="m-b-15 d-block">This is awesome website. I would love to comeback again. </span>
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
