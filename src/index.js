import React /* ------------------------------------- */ from 'react'
import ReactDOM /* ---------------------------------- */ from 'react-dom'

import { Provider } /* ------------------------------ */ from 'react-redux'
import { createStore, applyMiddleware, compose } /* - */ from 'redux'
import thunk /* ------------------------------------- */ from 'redux-thunk'
import { OidcProvider } /* -------------------------- */ from 'redux-oidc'
import { persistStore, persistReducer } /* ---------- */ from 'redux-persist'
import { PersistGate } /* --------------------------- */ from 'redux-persist/integration/react'
import storage /* ----------------------------------- */ from 'redux-persist/lib/storage'
import { routerMiddleware } /* ---------------------- */ from 'connected-react-router'

import userManager /* ------------------------------- */ from './oidc/userManager'
import history /* ----------------------------------- */ from './oidc/history'
import reducers /* ---------------------------------- */ from './reducers'

import App /* --------------------------------------- */ from './App'

import './index.css'

const persistConfig = { key: 'root', storage }

const persistedReducer = persistReducer(persistConfig, reducers(history))
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  persistedReducer,
  storeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
)

const persistor = persistStore(store)

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <OidcProvider store={store} userManager={userManager}>
        <App />
      </OidcProvider>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
)
