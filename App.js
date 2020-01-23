import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { SafeAreaView } from 'react-native'

import { store, persistor } from './src/redux'
import RootViews from './src'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView
          style={{ flex: 1 }}
          forceInset={{ ...ifIphoneX({ top: 'never', bottom: 'never' }) }}>
          <RootViews />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}

export default App
