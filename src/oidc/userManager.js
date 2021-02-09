import { createUserManager } from 'redux-oidc'

const USER_MANAGER_CONFIG = {
  client_id: /* ---------------- */ process.env.REACT_APP_OIDC_CLIENT_ID /* ----------- */ || 'II1iqHFHtqnZXWmfGArMW',
  redirect_uri: /* ------------- */ process.env.REACT_APP_OIDC_REDIRECT_URI /* -------- */ || 'http://localhost:3000/callback',
  response_type: /* ------------ */ process.env.REACT_APP_OIDC_RESPONSE_TYPE /* ------- */ || 'code',
  scope: /* -------------------- */ process.env.REACT_APP_OIDC_SCOPE /* --------------- */ || 'openid email',
  authority: /* ---------------- */ process.env.REACT_APP_OIDC_AUTHORITY_URI /* ------- */ || 'http://localhost:3007',
  post_logout_redirect_uri: /* - */ process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI /* - */ || 'http://localhost:3000',
  automaticSilentRenew: true,
  loadUserInfo: true,
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}/silent_renew`
}

const userManager = createUserManager(USER_MANAGER_CONFIG)

export default userManager
