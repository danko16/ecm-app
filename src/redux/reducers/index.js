import { combineReducers } from 'redux'

import me from './me'
import navigation from './navigation'

const appReducers = combineReducers({
  me,
  navigation,
})

const initialState = appReducers({}, {})

export const logoutAction = () => ({
  type: 'LOGOUT',
})

const rootReducers = (state, action) => {
  let newState = state
  if (action.type === 'LOGOUT') {
    newState = { ...initialState, navigation: state.navigation }
  }

  return appReducers(newState, action)
}

export default rootReducers
