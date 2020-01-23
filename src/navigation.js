import { StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Splash from './views/spalsh'
import Auth from './views/auth'

const styles = StyleSheet.create({
  header: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
})

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerStyle: styles.header,
        headerTitle: () => null,
      },
    },
    Auth: {
      screen: Auth,
    },
  },
  {
    initialRouteName: 'Auth',
  },
)

const AppContainer = createAppContainer(AppNavigator)

const App = createReduxContainer(AppContainer)

const mapStateToProps = state => ({
  state: state.navigation,
})

const AppWithNavigationState = connect(mapStateToProps)(App)

export default AppWithNavigationState
