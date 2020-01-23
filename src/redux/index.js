import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
//import { createWhitelistFilter } from 'redux-persist-transform-filter'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import AsyncStorage from '@react-native-community/async-storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

import rootReducer from './reducers'
import rootSaga from './sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['me'],
  blacklist: [],
  transforms: [],
}

const sagaMiddleWare = createSagaMiddleware()

const navigationMiddleWare = createReactNavigationReduxMiddleware(
  state => state.navigation,
)

const middleware = [sagaMiddleWare, navigationMiddleWare].filter(x => !!x)

const persistReducers = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistReducers,
  compose(applyMiddleware(...middleware)),
)

export const persistor = persistStore(store)
// persistor.purge()
sagaMiddleWare.run(rootSaga)
