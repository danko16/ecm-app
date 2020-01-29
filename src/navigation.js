import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Auth from './views/auth'
import Purchase from './views/purchase'
import Home from './views/home'
import Me from './views/me'
import Store from './views/store'
import Sale from './views/sale'

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#f71414',
    labelStyle: {
      fontSize: 16,
    },
    style: {
      backgroundColor: '#ffff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  },
}

const StoreStack = createStackNavigator(
  {
    Store: {
      screen: Store,
      navigationOptions: {
        headerShown: false,
      },
    },
    Auth: {
      screen: Auth,
    },
  },
  { initialRouteName: 'Store' },
)

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    Auth: {
      screen: Auth,
    },
  },
  { initialRouteName: 'Home' },
)

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === 'Auth') {
        tabBarVisible = false
      } else {
        tabBarVisible = true
      }
    })
  }

  return {
    tabBarVisible,
  }
}

const MeStack = createStackNavigator(
  {
    Me: {
      screen: Me,
      navigationOptions: {
        headerShown: false,
      },
    },
    Auth: {
      screen: Auth,
    },
  },
  { initialRouteName: 'Me' },
)

const PurchaseStack = createStackNavigator(
  {
    Purchase: {
      screen: Purchase,
      navigationOptions: {
        headerShown: false,
      },
    },
    Auth: {
      screen: Auth,
    },
  },
  { initialRouteName: 'Purchase' },
)

const SaleStack = createStackNavigator(
  {
    Sale: {
      screen: Sale,
      navigationOptions: {
        headerShown: false,
      },
    },
    Auth: {
      screen: Auth,
    },
  },
  { initialRouteName: 'Sale' },
)

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Home',
      },
    },
    Purchase: {
      screen: PurchaseStack,
      navigationOptions: {
        title: 'Purchase',
      },
    },
    Sale: {
      screen: SaleStack,
      navigationOptions: {
        title: 'Sale',
      },
    },
    Store: {
      screen: StoreStack,
      navigationOptions: {
        title: 'Store',
      },
    },
    Me: {
      screen: MeStack,
      navigationOptions: {
        title: 'Me',
      },
    },
  },
  TabNavigatorConfig,
)

const AppContainer = createAppContainer(AppNavigator)

const App = createReduxContainer(AppContainer)

const mapStateToProps = state => ({
  state: state.navigation,
})

const AppWithNavigationState = connect(mapStateToProps)(App)

export default AppWithNavigationState
