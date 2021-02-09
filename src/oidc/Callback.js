import { connect } /* -------------- */ from 'react-redux'
import { CallbackComponent } /* ---- */ from 'redux-oidc'
import { push } /* ----------------- */ from 'connected-react-router'

import userManager /* -------------- */ from './userManager'

const Callback = ({ push }) => {
  const successCallback = (user = {}) => {
    console.log('success', user)
    push('/')
  }

  const errorCallback = (err) => {
    console.log('error', err)
    userManager.signinRedirect()
  }

  return (
    <CallbackComponent
      userManager={userManager}
      successCallback={successCallback}
      errorCallback={errorCallback}
    >
      <div>
        callback
      </div>
    </CallbackComponent>
  )
}

export default connect(null, { push })(Callback)
