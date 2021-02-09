import { connect } /* ----------- */ from 'react-redux'
import { Route, Switch } /* ----- */ from 'react-router'
import { ConnectedRouter } /* --- */ from 'connected-react-router'

import Callback /* -------------- */ from './oidc/Callback'
import history /* --------------- */ from './oidc/history'

import Home /* ------------------ */ from './components/Home'
// import ProtectedRoute /* ------- */ from './components/ProtectedRoute'

const App = () => {
  return (
    <div className='App'>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/callback' component={Callback} />
          {/* <ProtectedRoute path='/dashboard' ProtectedComponent={Dashboard} /> */}
        </Switch>
      </ConnectedRouter>
    </div>
  )
}

export default connect(null, null)(App)
