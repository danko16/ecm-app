import { all } from 'redux-saga/effects'

import meSaga from './me'

export default function* rootSaga() {
  yield all([...meSaga])
}
