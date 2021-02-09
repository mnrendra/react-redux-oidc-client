import { combineReducers } /* ----------------------------------------- */ from 'redux'
import { reducer as oidc } /* ----------------------------------------- */ from 'redux-oidc'
import { connectRouter } /* ------------------------------------------- */ from 'connected-react-router'

export default (history) => combineReducers({
  oidc,
  router: connectRouter(history)
})
