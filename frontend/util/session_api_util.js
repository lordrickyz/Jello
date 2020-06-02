//Creating User
export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

//Signing User
export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user }
  })
);

//Logout User
export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);