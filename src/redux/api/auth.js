import { Api } from '../../helpers'

export default Object.freeze({
  login: payload =>
    Api.post('/login', payload, {
      headers: { 'Content-Type': 'application/json' },
    }),
})
