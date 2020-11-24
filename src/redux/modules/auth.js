const AUTH_LOGIN = 'auth/LOGIN'
const AUTH_LOGOUT = 'auth/LOGOUT'

const initialState = {
  isAuth: false,
  isAdmin: false,
  username: '',
}

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        username: payload.username,
        isAuth: true,
        isAdmin: payload.username === 'admin',
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        username: '',
        isAuth: false,
        isAdmin: false,
      }

    default:
      return state
  }
}

// loginData = {username, password}
export const authLogin = loginData => ({
  type: AUTH_LOGIN,
  payload: loginData,
})

export const authLogout = () => ({
  type: AUTH_LOGOUT,
})
