import { Api } from '../../utils'

export default Object.freeze({
  login: payload =>
    Api.post('/login', payload, {
      headers: { 'Content-Type': 'application/json' },
    }),
  register: payload =>
    Api.post('/register', payload, {
      headers: { 'Content-Type': 'application/json' },
    }),
})
