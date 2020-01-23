import React from 'react'
import { View } from 'react-native'
import AppNavigator from './navigation'

const RootViews = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  )
}

export default RootViews
