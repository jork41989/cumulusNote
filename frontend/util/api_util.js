export const fetchAUser = userId => ($.ajax({
  url: `/api/users/${userId}`,
  type: 'GET'
}));

export const fetchAllUsers = () => ($.ajax({
  url: `/api/users`,
  type: 'GET'
}));

export const updateUser = user => ($.ajax({
  method: `PATCH`,
  url:  `/api/users/${user.id}`,
  data: {user}
}))