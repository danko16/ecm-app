import React from 'react'
import { View } from 'react-native'
import AppNavigator from './navigation'

import { store } from './redux'
import { meActions } from './redux/reducers/me'
import { Api } from './utils'

Api.interceptors.request.use(
  function(config) {
    const { me } = store.getState()
    const token = me.access_token
    const refreshToken = me.refresh_token
    const clientId = me.client_id
    const provider = me.provider

    if (token && refreshToken && clientId && provider) {
      config.headers['x-token'] = `Bearer ${token}`
      config.headers['x-refresh-token'] = `Bearer ${refreshToken}`
      config.headers['x-client-id'] = clientId
      config.headers['x-provider'] = provider
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  },
)

Api.interceptors.response.use(
  function(config) {
    const token = config.headers['x-token']
    const refreshToken = config.headers['x-refresh-token']
    if (token && refreshToken) {
      store.dispatch(meActions.customSet('access_token', token))
      store.dispatch(meActions.customSet('refresh_token', refreshToken))
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  },
)

const RootViews = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  )
}

export default RootViews
