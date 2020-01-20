import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
//import { createWhitelistFilter } from 'redux-persist-transform-filter'
import { AsyncStorage } from 'react-native'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

import rootReducer from './reducers'
import rootSaga from './sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: [],
  blacklist: [],
  transforms: [],
}

const sagaMiddleWare = createSagaMiddleware()

const middleware = [sagaMiddleWare].filter(x => !!x)

const persistReducers = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistReducers,
  compose(applyMiddleware(...middleware)),
)

export const persistor = persistStore(store)
// persistor.purge()
sagaMiddleWare.run(rootSaga)
