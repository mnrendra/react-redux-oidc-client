import { useEffect, useState } /* - */ from 'react'
import { connect } /* ------------- */ from 'react-redux'

import userManager /* ------------- */ from '../oidc/userManager'

const Home = ({ oidc }) => {
  const [user, setUser] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const userProfile = oidc && oidc.user && oidc.user.profile ? oidc.user.profile : {}
    setUser(userProfile)
    setLoaded(true)
  }, [userManager])

  useEffect(() => {
    loaded && user.sub && setEmail(user.email)
  }, [oidc, user])

  return (
    <div className='Home'>
      {
        email
          ? (<div>{email} <button onClick={() => userManager.signoutRedirect()}>Sign-Out</button></div>)
          : (<button onClick={() => userManager.signinRedirect()}>Sign-In</button>)
      }
    </div>
  )
}

const mapStateToProps = ({ oidc, auth }) => ({ oidc, auth })

export default connect(mapStateToProps)(Home)
