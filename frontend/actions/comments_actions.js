import {createComment, removeComment} from '../util/comments_util';

export const RECEIVE_SINGLE_COMMENT = "RECEIVE_SINGLE_COMMENT";
export const RECEIVE_COMMENT_ERRORS ="RECEIVE_COMMENT_ERRORS";
export const REMOVE_SINGLE_COMMENT = "REMOVE_SINGLE_COMMENT";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAcomment = comment => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
})


const receiveErrorsComment = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

const removeAcomment = comment => ({
  type: REMOVE_SINGLE_COMMENT,
  comment
})

export const createAcomment = comment => dispatch => {
  return createComment(comment).then( comment => dispatch(receiveAcomment(comment)),
    errors => dispatch(receiveErrorsComment(errors.responseJSON)));
};

export const removeASignlecomment = comment => dispatch => {
  return removeComment(comment).then(comment => dispatch(removeAcomment(comment)))
}