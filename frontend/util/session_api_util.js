//Creating User
export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user },
  })
)

//Signing User
export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
  })
)

//Logout User
export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
)