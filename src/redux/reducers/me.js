export const ME_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/me/set-data',
  LOGIN_REQUEST: 'myapp/me/login/request',
  LOGIN_RESPONSE: 'myapp/me/login/response',
})

export const meActions = Object.freeze({
  setData: (field, value) => ({
    type: ME_ACTIONS.SET_DATA,
    field,
    value,
  }),
  loginRequest: value => ({
    type: ME_ACTIONS.LOGIN_REQUEST,
    value,
  }),
  loginResponse: value => ({
    type: ME_ACTIONS.LOGIN_RESPONSE,
    value,
  }),
})

const initState = {
  id: null,
  full_name: null,
  email: null,
  access_token: null,
  loading: null,
  message: null,
}

const reducer = (state = initState, { type, value, field }) => {
  switch (type) {
    case ME_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value,
      }
    case ME_ACTIONS.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ME_ACTIONS.LOGIN_RESPONSE:
      return {
        ...state,
        id: value.id,
        full_name: value.full_name,
        email: value.email,
        access_token: value.access_token,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
