import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaView, Text } from 'react-native'

import { store, persistor } from './src/redux'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <Text>Hello</Text>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}

export default App
