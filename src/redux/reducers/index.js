import { combineReducers } from 'redux'

import me from './me'

const appReducers = combineReducers({
  me,
})

const initialState = appReducers({}, {})

export const logoutAction = () => ({
  type: 'LOGOUT',
})

const rootReducers = (state, action) => {
  let newState = state
  if (action.type === 'LOGOUT') {
    newState = { ...initialState }
  }

  return appReducers(newState, action)
}

export default rootReducers
