import { call, put, takeLatest } from 'redux-saga/effects'

import { ME_ACTIONS, meActions } from '../reducers/me'
import { getErrorMessage } from '../../helpers'
import authApi from '../api/auth'

function* login({ value }) {
  try {
    const {
      data: { data },
    } = yield call(authApi.login, value)

    if (data) {
      yield put(meActions.loginResponse(data))
    }
  } catch (error) {
    yield put(meActions.setData('message', getErrorMessage(error)))
  }
}

const authSaga = [takeLatest(ME_ACTIONS.LOGIN_REQUEST, login)]

export default authSaga
