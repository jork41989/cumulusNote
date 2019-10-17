

export const createComment= (comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: comment,
    contentType: false,
    processData: false
  })
}


export const removeComment = (commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
}