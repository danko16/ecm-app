import { call, put, takeLatest } from 'redux-saga/effects'

import { ME_ACTIONS, meActions } from '../reducers/me'
import { getErrorMessage } from '../../utils'
import authApi from '../api/auth'

function* login({ value }) {
  try {
    const payload = {
      email_phone: value.email_phone,
      password: value.password,
      provider: value.provider,
    }

    const {
      data: { data },
    } = yield call(authApi.login, payload)

    if (data) {
      yield put(meActions.setData(data))
    }
  } catch (error) {
    yield put(meActions.customSet('message', getErrorMessage(error)))
  }
}

function* register({ value }) {
  try {
    const payload = {
      full_name: value.full_name,
      password: value.password,
      email: value.email,
      phone: value.phone,
      birthday: value.birthday,
    }

    const {
      data: { data },
    } = yield call(authApi.register, payload)

    if (data) {
      yield put(meActions.setData(data))
    }
  } catch (error) {
    yield put(meActions.customSet('message', getErrorMessage(error)))
  }
}

const meSaga = [
  takeLatest(ME_ACTIONS.LOGIN_REQUEST, login),
  takeLatest(ME_ACTIONS.REGISTER_REQUEST, register),
]

export default meSaga
