export const fetchAUser = userId => ($.ajax({
  url: `/api/users/${userId}`,
  type: 'GET'
}));

export const fetchAllUsers = () => ($.ajax({
  url: `/api/users`,
  type: 'GET'
}));

export const updateUser = (userId, user) => {
  
  return $.ajax({
  method: `PATCH`,
  url:  `/api/users/${userId}`,
  data: user ,
  contentType: false,
  processData: false
})}