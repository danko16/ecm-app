import { Api } from '../../utils'
import querystring from 'querystring'

export default Object.freeze({
  login: payload =>
    Api.post('/login', payload, {
      headers: { 'Content-Type': 'application/json' },
    }),
  register: payload =>
    Api.post('/register', querystring.stringify(payload), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }),
})
