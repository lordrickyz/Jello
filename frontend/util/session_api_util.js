//Creating User
export const signup = user => (
  $.ajax({
    url: '/api/user',
    method: 'POST',
    data: { user }
  })
);

//Signing User
export const login = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
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