import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter'
import axios from 'axios'

const Event = new EventEmitter()

export const Api = axios.create({
  baseURL: 'http://10.0.2.2:3000/api/v1',
  timeout: 40000,
  headers: {
    version: '1.0.0',
  },
})

export const getErrorMessage = ({ message, response, request }) => {
  let msg = message
  if (message === 'Network Error') {
    Event.emit('networkError')
    return false
  }
  if (request) {
    const { _timedOut: timedOut } = request
    if (timedOut) {
      return 'Tolong periksa koneksi internet Anda.'
    }
  }
  if (response && response.data && response.data.message) {
    if (response.status === 403 || response.status === 401) {
      Event.emit('tokenExpired')
      return false
    }
    if (response.status === 426) {
      Event.emit('needUpgrade')
      return false
    }
    if (Array.isArray(response.data.message)) {
      msg = response.data.message.reduce((acc, itr, idx) => {
        if (itr.msg) {
          const separator = `${itr.param}: ${itr.msg}, `
          return acc + separator
        } else if (itr.message) {
          const separator = `${itr.message}, `
          return acc + separator
        }
        return itr.msg
      }, '')
    } else {
      msg = response.data.message
      return msg
    }
  }
  return msg
}
